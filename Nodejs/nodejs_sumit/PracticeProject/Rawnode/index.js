// depenancies
const http = require('http');
const {handleReqRes}= require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data  = require('./lib/data');

//module scaffolding
const app = {};

data.create('test','newFile', {
  name : 'faisal',
  ID : 2022260065,
},(err)=>{
  console.log(err);
})

// creating the server 
app.createServer = ()=>{
    const server = http.createServer(handleReqRes);
    server.listen(environment.PORT,()=>{
        console.log(`Listening to porst ${environment.PORT}`);
      //  console.log(`Environment variable is  ${process.env.NODE_ENV}`);
    })
}



app.createServer();