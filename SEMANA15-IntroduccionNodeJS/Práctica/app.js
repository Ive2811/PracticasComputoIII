/*process.argv.forEach((index, value) => {
    console.log(`${index}: ${value}`);
});

const colors = ['Blue', 'Yellow', 'Red','Green'];
console.table(colors);

const fruits = {apple: 15, mangoes: 20};
console.table(fruits);


const name = () => console.log("Iveth");

const duration = () => {
    console.time('name()');

    //Medir el tiempo que lleva en ejecutarse.
    name();
    console.timeEnd('name()');
}
duration();

const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

name.question("¿Cuál es su nombre? ", name => {
    console.log(`Bienvenido ${name}`);
});*/

const {sum, pets } = require('./functions.js');


console.log (`Resultado de la suma: ${sum(5,6)}`);

pets.forEach((pet)=>{
    console.log(pet);
});

