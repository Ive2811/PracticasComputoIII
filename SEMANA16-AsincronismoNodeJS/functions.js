function first(){
    console.log("Primera función");
}

function second(callback){
    setTimeout(() => {
    console.log("Segunda función");
    callback();
},0);
}

function third(){
    console.log("Tercera función");
}

//Llamado a las funciones.
first();
second(third);
//third();