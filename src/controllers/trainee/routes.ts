import { Router } from "express";
import TraineeController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";
import getUser from "../../libs/routs/constants";

const traineeRouter=new Router();

traineeRouter.route('/')
    .get(authMoiddleWare(getUser,'read'),validationHandler(Validation.get), TraineeController.get)
    .post(validationHandler(Validation.create),TraineeController.create)
    .put(validationHandler(Validation.update),TraineeController.update)
    .delete(validationHandler(Validation.delete),TraineeController.delete);

export default traineeRouter;
