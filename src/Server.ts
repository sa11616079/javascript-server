import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';
import {IConfig} from "./config/IConfig";
class Server {
    app
    constructor(private config:IConfig) {
        this.config=config;
        this.app = express();
    }
    bootstrap() {
        this.setupRouts();
        this.initBodyParser();
        return this;
    }
    setupRouts() {
        const { app } = this;

        app.use((req, res, next) => {
            console.log('Inside First MidleWare');
            next();
        });

        app.use('/health-check', (req, res) => {
            console.log('Inside Second MidleWare');
            res.send('I am fine');
        });

        app.use(notFoundHandler);
        app.use(errorHandler);

        return this;
    }
    initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config: { PORT } } = this;
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${PORT}`);
        })
    }
}
export default Server;
