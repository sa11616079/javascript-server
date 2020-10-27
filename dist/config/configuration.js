"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envVars = require('dotenv').config();
console.log("inside config", envVars);
const config = envVars.parsed;
exports.default = config;
Object.freeze(config);
//# sourceMappingURL=configuration.js.map