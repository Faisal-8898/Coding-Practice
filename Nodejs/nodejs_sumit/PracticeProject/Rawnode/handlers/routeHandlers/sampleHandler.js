

// module scaffolding
const handler = {};

handler.sampleHandler = (reqProperties , callback) =>{

    
    callback(200,{
        message : 'ami sample mal'
    })
}

module.exports = handler;