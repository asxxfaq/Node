const http = require('http')

http.createServer(function(req,res){
    res.write("hello Node js")
    res.end()
}).listen(8000,()=>{
    console.log("Api running");
    
})