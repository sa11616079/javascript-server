import {Router} from "express";
import traineeRouter from "./controllers/trainee/routes";
const mainRouter=new Router();
mainRouter.use('/trainee',traineeRouter);
export default mainRouter;
