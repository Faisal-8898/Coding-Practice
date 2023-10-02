//module scaffolding
const utilities = {};

utilities.parseJSON = (jsonString) =>{
    let output = {};

    try{
        output = JSON.parse(jsonString);
    }
    catch{
        output = {};
    }
}

 //module export
module.exports = utilities;