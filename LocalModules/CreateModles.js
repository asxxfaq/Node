const fs = require('fs')
function Create(){
    fs.mkdir('myFolder', (err) => {
        if (err) throw err;
        console.log("Folder created");
    fs.writeFile('myFolder/text.txt', "Hellooo Node js" , (err) => {
            if(err) throw err 
            console.log("data added");
    
        })
        
    })
}
module.exports = Create