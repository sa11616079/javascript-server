import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";
import {permissions} from "../../libs/constants";

const userRouter=Router();
userRouter.route('/me')
    .get(authMoiddleWare(permissions.getUser,"read"),UserController.me);

userRouter.route('/login')
    .post(authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.login),UserController.login);

export default userRouter;