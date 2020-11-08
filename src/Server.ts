import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';
import {IConfig} from "./config/IConfig";
import mainRouter from "./router";
import Database from "./libs/Database";

class Server {
    app:express.Express
    constructor(private config:IConfig) {
        this.config=config;
        this.app = express();
    }

    bootstrap() {
        this.initBodyParser();
        this.setupRouts();
        return this;
    }

    setupRouts() {
        const { app } = this;
        app.use((req:Request,res:Response,next:NextFunction) => {
            console.log('Inside First MidleWare');
            next();
        });

        app.use('/health-check', (req:Request,res:Response,next:NextFunction) => {
            console.log('Inside Second MidleWare');
            res.send('I am OKK');

        });

        this.app.use('/api',mainRouter);
        app.use('/health-check', (req:Request, res:Response) => {
            console.log('Inside Second MidleWare');
            res.send('I am fine');
        });

        app.use(notFoundHandler);
        app.use(errorHandler);

        return this;
    }

    initBodyParser() {
        this.app.use(bodyParser.json());
    }
    
    public run() {

        const {app,config:{ PORT, MONGO_URL}} = this;
        Database.open(MONGO_URL)
            .then((res)=>{
                console.log("Successfully connected to Mongo");
                this.app.listen(PORT,() =>
                {
                    console.log(`App is running on port ${PORT}`);         
                });
            })
            .catch(err=>{console.log(err)});
    }
}

export default Server;
