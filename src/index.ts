import Server from './Server';
import {config} from './config/index';
console.log("config is " , config);
const server=new Server( config );
server.bootstrap().run();
