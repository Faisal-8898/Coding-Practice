//module scaffolding
const environment = {};

environment.staging = {
    PORT: 4000,
    envName : 'staging',
};

environment.production = {
    PORT : 5000,
    envName : 'production',
};

// determin which environment has passed 

const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport = typeof environment[currentEnvironment] === 'object' ? environment[currentEnvironment] : environment.staging;

module.exports = environmentToExport;