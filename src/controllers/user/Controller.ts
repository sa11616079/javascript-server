import { Request, Response, NextFunction } from "express";
import { userModel } from "../../repositories/user/UserModel";
import config from "../../config/configuration";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

class UserController {
    static instance: UserController

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    me(req: any, res: Response, next: NextFunction) {
        try {

            console.log(":::::::::::::::INSIDE ME::::::::::::::");
            const { user } = req;
            delete user.password;
            console.log("User is : ", user);
            res.send({
                status: "Ok",
                message: "Me",
                data: { user }
            });
        }
        catch (err) {
            return next({ error: err, message: err });
        }
    }

    login(req: Request, res: Response, next: NextFunction) {

        try {
            console.log("::::::::::::INSIDE LOG IN::::::::::::");
            const { email, password } = req.body;
            userModel.findOne({ email: email, deletedAt: null }, (err, result) => {
                if (result != null) {
                    async function hashPassword() {
                        const hashPwd = await bcrypt.compare(password, result.password);
                        return hashPwd;
                    }
                    hashPassword().then((result1) => {
                        if (result1) {

                            const payload = { email: result.email, id: result.id, role: result.role };
                            async function signInUser() {
                                const token = await jwt.sign(payload, config.secretKey, { expiresIn: '15m' });
                                return token;
                            }
                            signInUser().then((genToken) => {
                                // console.log("token : ", genToken)
                                if (genToken) {
                                    console.log("You have Logged in successfully...");
                                    console.log(result);
                                    res.send({
                                        status: "ok",
                                        message: 'Authorization Token',
                                        data: genToken,
                                    });
                                }
                            })
                                .catch((err) => {
                                    console.log("Error : ", err);
                                })
                        }
                        else {
                            res.send({
                                message: 'Password Doesnt Match',
                                status: 400
                            });
                        }
                    })
                        .catch((err) => {
                            console.log("Error : ", err);
                        })
                }
                else {
                    res.send({
                        message: 'Email is not Registered',
                        status: 404
                    });
                }
            });
        }
        catch (err) {
            res.send(err);
        }
    }
}

export default UserController.getInstance();