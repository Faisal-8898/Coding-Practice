const http = require('http');
const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.write('<html><head><title>Form</title></head></html>');
        res.end('<body><form method="post" action="/process"><input name = "message"></form></body>');
    }
    else if(req.url === '/about'){
        res.write('hello I am Faisal Ahmed');
        res.end();
    }
    else{
        res.write("404! not found");
        res.end()
    }

});

server.listen(3000);