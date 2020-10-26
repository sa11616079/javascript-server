import { IConfig } from './IConfig';
const envVars = require ('dotenv').config()
console.log("inside config" , envVars);

const config = envVars.parsed;
export default config;
Object.freeze( config );
