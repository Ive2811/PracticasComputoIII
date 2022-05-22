var express = require('express');
var router = express.Router();
const data = require('../userData');
const methods = require('../methods');
var registros = require('../registros')

//Constantes para rutas de páginas, login y register.
const loginPage = "../views/pages/login";
const registerPage ="../views/pages/register";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Registro de rutas.
router.get('/home', (req, res) => {
  res.render('home'); 
});

router.get('/login', (req, res) => {
  res.render(loginPage);
});

router.get('/register', (req, res) => {
  res.render(registerPage);
});

router.post('/register', (req,res) =>{
  const { fullName, email, password, confirmPassword } = req.body;

  //Validación.
  if (password === confirmPassword){

    //Validar si el correo está registrado.

  if (data.data.find(u => u.email === email)) {
    res.render(registerPage, {
      message: "El usuario ya está registrado.",
      messageClass: "alert-danger"
    });
  }

  //Encriptar el password.
  const pHash = methods.getHashedPassword(password);

  //Almacenar los datos.
  data.data.push({
    fullName,
    email,
    password: pHash
  });
  registros.save(fullName,email, password)
  res.render(loginPage, {
    message: "Registro exitoso. Inicie sesión.",
    messageClass: "alert-success"
  });
  
  }else {
    res.render(registerPage, {
      message: "Las contraseñas no coinciden",
      messageClass: "alert-danger"
    });
  }
});
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const pHash = methods.getHashedPassword(password);

    const dataU = data.data.find(u => {
      var valid= u.email === email && pHash === u.password;
      return valid
  });

  if(dataU) {
    const authToken = methods.generateToken();
    
    methods.authTokens[authToken] = dataU;
    res.cookie('AuthToken', authToken);
    res.redirect('/home');
  } else {
    res.render(loginPage, {
      message: "El correo o contraseña no coinciden.",
      messageClass: "alert-danger"
    });
  }
});
module.exports = router;
