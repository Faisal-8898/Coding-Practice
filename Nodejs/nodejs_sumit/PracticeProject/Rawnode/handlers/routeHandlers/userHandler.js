// module scaffolding
const data = require('../../lib/data')
const handler = {};

handler.userHandler = (reqProperties, callback) => {
    const acceptedMethod = ["get", "put", "post", "delete"];
    if (acceptedMethod.indexOf(reqProperties.method) > -1) {
        handler._users[reqProperties.method](reqProperties, callback);
        callback(200, {
            message: "ami user bhai",
        });
    } else {
        callback(405);
    }
};

handler._users = {};

handler._users.post = (reqProperties, callback) => {
    const firstName = typeof (reqProperties.body.firstName) === 'string' && reqProperties.body.firstName.trim().length > 0 ? reqProperties.body.firstName : false;

    const lastName = typeof (reqProperties.body.lastName) === 'string' && reqProperties.body.lastName.trim().length > 0 ? reqProperties.body.lastName : false;

    const phone = typeof (reqProperties.body.phone) === 'string' && reqProperties.body.phone.trim().length == 11 ? reqProperties.body.phone : false;

    const password = typeof (reqProperties.body.password) === 'string' && reqProperties.body.password.trim().length >= 8 ? reqProperties.body.password : false;

    const tooAgreement = typeof (reqProperties.body.tooAgreement) === 'boolean' && reqProperties.body.tooAgreement.trim().length > 0 ? reqProperties.body.tooAgreement : false;


    if (firstName && lastName && phone && password && tooAgreement) {
        data.read('users', phone, (err, user) => {
            if (err) {
                let userObject = {
                    firstName,
                    lastName,
                    phone,

                }
            }
            else {
                callback(500, {
                    error: 'there was a problem in server side',
                })
            }
        }
        )
    }

    else {
        callback(400, {
            error: 'invalid signup info',
        });
    }


}

handler._users.get = (reqProperties, callback) => {

}

handler._users.put = (reqProperties, callback) => {

}

handler._users.delete = (reqProperties, callback) => {

}

module.exports = handler;
