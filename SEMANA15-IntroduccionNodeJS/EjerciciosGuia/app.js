const {comidas} = require('./ejercicio3.js');

const {operacion1}=require('./ejercicio2.js')

const operacion = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

operacion.question("¿Que operacion necesita realizar? \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. División \n", operacion => {
    operacion1(operacion)
   
});