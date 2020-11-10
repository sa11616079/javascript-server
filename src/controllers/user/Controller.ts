import { Request, Response, NextFunction } from "express";
import { userModel } from "../../repositories/user/UserModel";
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

    me(req:any, res: Response, next: NextFunction){
        const{user}=req;
        delete user.password;
        console.log("User is : ",user);
        return res.status(200).send({message:"Me",status:"Ok",data:user});
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
                if (result) {
                    if (password === result.password) {
                        result.password = bcrypt.hashSync(result.password, 10);
                        const token = jwt.sign({ result }, 'ZIdstYzmRSRzDscHmvbumwGyFfqhPSBI');
                        console.log(result);
                        // console.log(token);
                        res.send({
                            data: token,
                            message: 'Login successfully',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            message: 'Password Doesnt Match',
                            status: 400
                        });
                    }
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
