//module scaffolding
const utilities = {};
const crypto = require('crypto');

utilities.parseJSON = (jsonString) =>{
    let output = {};

    try{
        output = JSON.parse(jsonString);
    }
    catch{
        output = {};
    }
}

//hash that string 
utilities.hash = (str) =>{
    if(typeof(str) === 'string' && str.length>0){
        let hash = crypto
        .createHmac('sha256','password')
        .update("I don't know what are you talking about")
        .digest ('hex');
    }
  
}

 //module export
module.exports = utilities;