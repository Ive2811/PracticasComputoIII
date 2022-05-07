const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Se resolvió la promesa.'), 2000)
});

promise.then((response) => {
    console.log(response)
});