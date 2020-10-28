"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const index_1 = require("./config/index");
console.log("config is ", index_1.config);
const server = new Server_1.default(index_1.config);
server.bootstrap().run();
//# sourceMappingURL=index.js.map