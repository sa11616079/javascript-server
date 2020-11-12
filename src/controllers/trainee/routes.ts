import { Router } from "express";
import TraineeController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";

const traineeRouter=new Router();

traineeRouter.route('/')
    .get(validationHandler(Validation.get), TraineeController.get)
    .post(validationHandler(Validation.create),TraineeController.create)
    .put(validationHandler(Validation.update),TraineeController.update)
    .delete(validationHandler(Validation.delete),TraineeController.delete);

export default traineeRouter;
