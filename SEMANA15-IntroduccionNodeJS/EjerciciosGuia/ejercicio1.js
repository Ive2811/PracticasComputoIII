//Escriba un programa el cual reciba la edad argumento y determine si es mayor de edad.

console.log(" ");
console.log("-----------Ejercicio 1.------------");
console.log(" ");

const edad = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
edad.question("¿Cuál es su edad? ", edad => {

    if(edad >= 18){
        console.log("Es mayor de edad.");
    }else{
        console.log("Es menor de edad.");
    }
});


