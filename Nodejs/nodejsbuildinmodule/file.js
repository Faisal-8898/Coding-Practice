const fs = require('fs');

fs.writeFileSync('myFile.txt','Hello rogrammers');
fs.writeFileSync('myFile.json','{"name":"faisal"}');
fs.appendFile('myFile.txt',' :batija valo acho?',(err,data)=>{

    fs.readFile('myFile.txt',(err, data)=>{
    
        console.log(data);
        console.log(data.toString());
    }); //asyncronous is the build in , but we can do it by syncronous by adding sync like readFilesync
});