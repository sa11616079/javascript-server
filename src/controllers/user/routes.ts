import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";

const userRouter=Router();
userRouter.route('/')
    .get(validationHandler(Validation.get),UserController.get)
    .post(validationHandler(Validation.create),UserController.create)
    .put(validationHandler(Validation.update),UserController.update)
    .delete(validationHandler(Validation.delete),UserController.delete);

export default userRouter;
