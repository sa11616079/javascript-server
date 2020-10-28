const envVars = require ('dotenv').config()
console.log("inside config" , envVars);
const config = envVars.parsed;
Object.freeze( config );
export default config;
