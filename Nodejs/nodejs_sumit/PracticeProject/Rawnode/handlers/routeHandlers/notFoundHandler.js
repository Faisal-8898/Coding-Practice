const handler = {};

handler.notFoundHandler = (reqProperties , callback) =>{
    console.log(reqProperties);
    callback(404,{
        message : 'Your request was not found'
    });
}

module.exports = handler;