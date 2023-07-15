const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('request is made');
    res.setHeader('Content-Type','text/html');
    let path = './views/';
    switch(req.url){
        case '/':
            path+='index.html'
            break;
        case '/about':
            path+='about.html'
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;   
               
        default:
            path+='404.html';
            break;      
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log('server is listening');

})