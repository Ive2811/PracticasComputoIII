var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methods = require('./methods');
const hbs= require('hbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var brandsRouter = require('./routes/brands');

var app = express();

mongoose.connect('mongodb://localhost:27017/app', {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("Se estableció conexión a MongoDB"))
.catch((e) => console.log("Error", e))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+"/views/partials");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//Inyectar solicitud leyendo authtoken.
app.use((req, res, next) => {
  const authToken = req.cookies['AuthToken']; //Obtener token.
    //Inyectar el usuario en la solicitud.
  req.user = methods.authTokens[authToken];
  next();
  })

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/brand', brandsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
