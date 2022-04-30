//Escriba un programa que le solicite dos números y permita realizar las operaciones básicas, el usuario debe seleccionar la operación a realizar.

console.log(" ");
console.log("-----------Ejercicio 2.------------");
console.log(" ");


exports.operacion1=(operacion)=>{

    const numeros = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    numeros.question("¿Cuál es su primer valor? ", num1  => {
        numeros.question("¿Cuál es su segundo valor? ", num2 => {
            if(operacion=1){
                console.log(num1+num2)
                
            }else if(operacion=2){
                console.log(num1-num2)

            }else if(operacion=3){
                console.log(num1*num2)
            }else if(operacion=4){
                console.log(num1/num2)
            }
        });
    });
    
}

