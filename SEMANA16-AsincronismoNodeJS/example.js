const operation = (n1,n2,op) => {
    setTimeout(()=>{
        return op (n1,n2);
    }, 500);
    }

    operation(5,2, (a,b) => {
        console.log(a+b)
    });
