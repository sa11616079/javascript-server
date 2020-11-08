import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";

const userRouter=Router();
userRouter.route('/')
    .get(authMoiddleWare(), validationHandler(Validation.get),UserController.get)
    .post(validationHandler(Validation.create),UserController.create)
    .put(validationHandler(Validation.update),UserController.update)
    .delete(validationHandler(Validation.delete),UserController.delete);

export default userRouter;
