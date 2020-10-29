import { Router } from "express";
import TraineeController from "./Controller";
const traineeRouter=new Router();

traineeRouter.route('/')
    .get(TraineeController.get)
    .post(TraineeController.create)
    .put(TraineeController.update)
    .delete(TraineeController.delete);

export default traineeRouter;
