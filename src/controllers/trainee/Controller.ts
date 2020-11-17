import { Request, Response, NextFunction } from "express";
// import UserSchema from "src/repositories/user/UserSchema";
import IUserModel from "../../repositories/user/IUserModel";
import { userModel } from "../../repositories/user/UserModel";
import UserRepository from "../../repositories/user/UserRepository";
import IRequest from "../../libs/routes/IRequest";
import * as bcrypt from "bcrypt";

class TraineeController {
    static instance: TraineeController

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    userRepository: UserRepository = new UserRepository();

    get = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Inside get request for user");
            this.userRepository.count()
                .then((count) => {
                    if (count > 0) {
                        this.userRepository.getAll()
                            .then((result) => {
                                console.log("All data is : ", result);
                                res.status(200).send({ message: "successfully fetched user data", details: result });
                            })
                    }
                    else {
                        console.log("user does not exist");
                        res.status(404).send({ message: "user does not exist", NoOfUser: count });
                    }
                })
        }
        catch (err) {
            console.log("Inside error", err);
        }
    }

    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Inside create method");
            const { name, role, email, password } = req.body;
            // console.log(email)
            userModel.findOne({ email: email }, (err, result) => {

                if (result === null) {
                    this.userRepository.create({ name: name, role: role, email: email, password: bcrypt.hashSync(password, 10) })
                        .then((data) => {
                            console.log("Response is : ", data);
                            res.status(200).send({ message: "successfully created data", data: data });
                        })
                }

                else {
                    res.status(404).send({ message: `${email} is already exist in database`, data: { email } });
                }
            })
        }
        catch (err) {
            console.log("Inside error", err);
        }
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        try {

            console.log("Inside update method");
            const { id, name, role, email, password } = req.body;
            userModel.findOne({ originalId: id }, (err, result) => {

                if (result != null) {
                    // console.log(result);
                    this.userRepository.update({ updatedAt: Date.now(), updatedBy: id, createdBy: id, name: name || result.name, role: role || result.role, email: email || result.email, password: password || result.password }, result.id)
                        .then((data) => {
                            console.log("Response is : ", data);
                            res.status(200).send({ message: "successfully updated data", data: data });
                        })
                }
                else {
                    console.log("user does not exist ");
                    res.status(404).send({ message: "user does not exist", data: result });
                }

            });
        }
        catch (err) {
            console.log("Inside error", err);
        }
    }

    delete = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.body;
        userModel.findOne({ originalId: id }, (err, result1) => {

            this.userRepository.deleteData({ originalId: id }, result1.id)
                .then((result) => {
                    console.log(result)
                    res.status(200).send({ message: "data Deleted successfully", data: result });
                })
                .catch((err) => {
                    res.send({
                        message: 'User not found to be deleted',
                        code: 404
                    });
                });
        })

    }
}

export default TraineeController.getInstance();
