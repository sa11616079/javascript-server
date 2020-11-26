import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";

const userRouter=Router();
userRouter.route('/me')
    .get(authMoiddleWare("getUser","read"),UserController.me);

userRouter.route('/login')
    .post(validationHandler(Validation.login),UserController.login);

export default userRouter;