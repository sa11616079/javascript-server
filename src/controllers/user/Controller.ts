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
        const { user } = req;
        delete user.password;
        console.log("User is : ", user);
        return res.status(200).send({ message: "Me", status: "Ok", data: user });
    }

    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("Inside get request for user");
            const data =
                [
                    {
                        name: "user1",
                        address: "Noida"
                    }
                ]
            res.status(200).send({ message: "successfully fetched users", Data: data });
        }
        catch (err) {
            console.log("Inside error", err);
        }
    }

    create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("Inside post request for user");
            const data =
                [
                    {
                        name: "user1",
                        address: "Noida"
                    }
                ]
            res.status(200).send({ message: "successfully fetched users", Data: data });
        }
        catch (err) {
            console.log("Inside error", err);
        }
    }

    update(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("Inside update request for user");
            const data =
                [
                    {
                        name: "user1",
                        address: "Noida"
                    }
                ]
            res.status(200).send({ message: "successfully fetched users", Data: data });
        }
        catch (err) {
            console.log("Inside error", err);
        }
    }

    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("Inside delete request for user");
            const data =
                [
                    {
                        name: "user1",
                        address: "Noida"
                    }
                ]
            res.status(200).send({ message: "successfully fetched users", Data: data });
        }
        catch (err) {
            console.log("Inside error", err);
        }
    }

    login(req: Request, res: Response, next: NextFunction) {

        try {
            const { email, password } = req.body;
            userModel.findOne({ email: email }, (err, result) => {
                if (result != null) {
                    async function hashPassword() {
                        const hashPwd = await bcrypt.compare(password, result.password);
                        return hashPwd;
                    }
                    hashPassword().then((result1) => {
                        if (result1) {

                            const payload = { email: result.email, id: result.id };
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
                                        token: genToken,
                                        message: 'Login successfully',
                                        status: 200
                                    });
                                }
                            })
                            .catch((err)=>{
                                console.log("Error : ",err);
                            })
                        }
                        else {
                            res.send({
                                message: 'Password Doesnt Match',
                                status: 400
                            });
                        }
                    })
                    .catch((err)=>{
                        console.log("Error : ",err);
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