const fs = require('fs')


const  save =(fullName,email,password) => {

    fs.readFile('userData.js',(err, data)=>{
        if(err){
            throw err
        }
        var info = data.toString()
        var final = 0
        
        
        for(var i = info.length; i >= 0 ; i -- ){

            if(info[i]=== "]" ){
                final = i

                break
            }    
        }

        var text = info.slice(0,final-1)
        var newdata = ", \n { \n fullname:'"+fullName+"', \n email:'"+email+"', \n password:'"+password+"' \n } "
        var datos = text + newdata + "]; \n module.exports = { data }"
        

        fs.writeFile('userData.js',datos,(err)=>{
            if(err){
                throw err
            }
        })
    })
}
module.exports = {save}