import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";
import {permissions} from "../../libs/constants";

/**
 * @swagger
 *
 * /api/user/me:
 *   get:
 *     description: Current user Details.
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 */

const userRouter=Router();
userRouter.route('/me')
    .get(authMoiddleWare(permissions.getUser,"read"),UserController.me);

 /**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *     description: Login Credentials
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *     responses:
*         200:
*           description: login
*         422:
*           description: invalid email or password
*           schema:
*             oneOf:
*             properties:
*               status:
*                   example: "Bad Request"
*               message:
*                   example: Password does not match
*               err:
*                   example: Password is incorrect
 */
userRouter.route('/login')
    .post(validationHandler(Validation.login),UserController.login);
export default userRouter;