import { Router } from "express";
import TraineeController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";
import {permissions} from "../../libs/constants";

const traineeRouter=Router();

traineeRouter
    .get('/getall',authMoiddleWare(permissions.getUser,"read"),TraineeController.get,validationHandler(Validation.get))
    .post('/create',authMoiddleWare(permissions.getUser,"read"),TraineeController.create,validationHandler(Validation.create))
    .put('/update',authMoiddleWare(permissions.getUser,"read"),TraineeController.update,validationHandler(Validation.update))
    .delete('/delete',authMoiddleWare(permissions.getUser,"read"),TraineeController.delete,validationHandler(Validation.delete));

export default traineeRouter;
