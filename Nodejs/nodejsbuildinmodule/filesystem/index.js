const fs = require('fs');
const { chunk } = require('lodash');
const readData = fs.ReadStream(`${__dirname}/bigdata.txt`);
readData.on('data',(chunk)=>{
    console.log(chunk);
}); 

