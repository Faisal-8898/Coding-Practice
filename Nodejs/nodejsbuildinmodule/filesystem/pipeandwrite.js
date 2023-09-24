const fs = require('fs');
const { chunk } = require('lodash');
const { createTypeReferenceDirectiveResolutionCache } = require('typescript');
const readData = fs.ReadStream(`${__dirname}/bigdata.txt`);
const writeStream = fs.WriteStream(__dirname+"/output.txt");
// readData.on('data',(chunk)=>{
//    writeStream.write(chunk);
// }); 

readData.pipe(writeStream);