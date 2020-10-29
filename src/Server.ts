import * as express from "express";
import { IConfig } from "./config/IConfig";
class Server {
    app
    constructor( private config:IConfig ) {
        this.config=config;
        this.app=express()
    }
    bootstrap() {
        this.setupRouts()
        return this;
    }
    setupRouts() {
        const { app }=this;
        app.get('/health-check',( req, res, next ) => {
            res.send("I am OK");
        });
        
        return this;
    }
    run() {
        const {app, config:{ PORT }}=this;
        app.listen(PORT,( err ) => {
            if( err ) {
                console.log( err );
            }
            console.log(`App is running on port ${ PORT }`); 
        })

    }
}
export default Server;
