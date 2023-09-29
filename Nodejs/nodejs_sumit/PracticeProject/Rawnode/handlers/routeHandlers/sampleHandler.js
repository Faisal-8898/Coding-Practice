

// module scaffolding
const handler = {};

handler.sampleHandler = (reqProperties , callback) =>{
    console.log(reqProperties);
    
    callback(200,{
        message : 'ami sample mal'
    })
}

module.exports = handler;