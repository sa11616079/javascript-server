import { Router } from "express";
import TraineeController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";
import {permissions} from "../../libs/constants";

const traineeRouter=Router();

traineeRouter.route('/')
    .get(authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.get),TraineeController.get)
    .post(authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.create),TraineeController.create)
    .put(authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.update),TraineeController.update)
    .delete(authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.delete),TraineeController.delete);

export default traineeRouter;
