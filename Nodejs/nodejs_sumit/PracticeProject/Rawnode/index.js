// depenancies
const http = require('http');
const {handleReqRes}= require('./helpers/handleReqRes')

//module scaffolding
const app = {};

// configaration 
app.config={
    PORT : 3000
}

// creating the server
app.createServer = ()=>{
    const server = http.createServer(handleReqRes);
    server.listen(app.config.PORT,()=>{
        console.log(`Listening to porst ${app.config.PORT}`);
    })
}



app.createServer();