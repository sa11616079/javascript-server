import { Router } from "express";
import UserController from "./Controller";

const userRouter=Router();
userRouter.route('/')
    .get(UserController.get)
    .post(UserController.create)
    .put(UserController.update)
    .delete(UserController.delete);

export default userRouter;
