import { Router } from "express";
import TraineeController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
// import authMoiddleWare from "../../libs/routes/authMoiddleWare";

const traineeRouter=Router();

traineeRouter
    .get('/getall',TraineeController.get)
    .post('/create',TraineeController.create)
    .put('/update',TraineeController.update)
    .delete('/delete',TraineeController.delete);

export default traineeRouter;
