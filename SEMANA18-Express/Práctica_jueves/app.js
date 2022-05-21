const express = require('express');
const app = express();

//Definir motor de plantillas a utilizar.

app.set('view engine', 'jade');


app.get('/', function(req, res){
    res.render('index',
    {title:"Programación Computacional IV", message: "Express con jade."});
});

app.route('/test').get(function(req, res){
    res.send("Test page");
});

app.route('/page').get(function(req, res){
    res.send("Hola, esta es una página de prueba");
});

const server = app.listen(3000);