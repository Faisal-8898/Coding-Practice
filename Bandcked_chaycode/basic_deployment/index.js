const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send('kire abuilla');
})

app.listen(port,()=>{
    console.log("The server has started");
})