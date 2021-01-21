import { Request, Response, NextFunction } from "express";
import { userModel } from "../../repositories/user/UserModel";
import UserRepository from "../../repositories/user/UserRepository";
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
    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    userRepository: UserRepository = new UserRepository();
    get = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("::::::::::::INSIDE GETALL METHOD::::::::::::");
            this.userRepository.count()
                .then((count) => {
                    if (count > 0) {
                        const keys = Object.keys(req.query);
                        let sortBy: any;
                        let searchBy: any;
                        if (keys.includes("searchBy")) {

                            const value = req.query.searchBy;
                            if (!value.toString().includes("@")) {
                                searchBy = { name: req.query.searchBy };
                            }
                            else if (value.toString().includes("@")) {
                                searchBy = { email: req.query.searchBy };
                            }
                        }
                        else {
                            searchBy = { role: "trainee" };
                        }
                        if (req.query.sortBy === "name") {
                            sortBy = { name: 1 };
                        }
                        else if (req.query.sortBy === "email") {
                            sortBy = { email: 1 };
                        }
                        else {
                            sortBy = { createdAt: -1 };
                        }
                        this.userRepository.getAll({ role: "trainee" })
                            .then((result) => {

                                this.userRepository.list(searchBy, sortBy, req.query.skip, req.query.limit)
                                    .then((countTrainee) => {

                                        console.log("All data is : ", countTrainee);
                                        console.log("total trainees : ", countTrainee.length);
                                        console.log("NoOfUsers is : ", result.length);
                                        res.send({
                                            status: "ok",
                                            message: "Successfully fetched Trainees",
                                            data: ({
                                                count: countTrainee.length,
                                                records: countTrainee
                                            })
                                        });
                                    })
                            })
                    }
                    else {
                        console.log("there is no Trainee in your database");
                        res.send({
                            status: 404,
                            message: "there is no Trainee in your database"
                        });
                    }
                })
        }
        catch (err) {
            console.log("Inside error : ", err);
            res.send({
                status: "error",
                message: "Inside error ",
                error: err
            });
        }
    }
    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("::::::::::::INSIDE CRAETE METHOD::::::::::::");
            console.log("Inside create method");
            const { name, role, email, password } = req.body;
            userModel.findOne({ email: email }, (err, result) => {
                if (result === null) {
                    async function encodedPassword() {
                        return await bcrypt.hash(password, 10)
                    }
                    encodedPassword().then((pass) => {
                        this.userRepository.create({ name: name, role: role || "trainee", email: email, password: pass })
                            .then((data) => {
                                console.log("Trainee Created : ", data);
                                res.send({
                                    status: 200,
                                    message: "Trainee Created Successfully",
                                    data: ({ data })
                                });
                            })
                    })
                }
                else {
                    res.send({
                        status: 404,
                        message: `${email} is already exist`,
                        data: ({
                            email: email
                        })
                    });
                }
            })
        }
        catch (err) {
            console.log("Inside error : ", err);
            res.send({
                status: "error",
                message: "Inside error ",
                error: err
            });
        }
    }
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id, name, role, email } = req.body;
            const user = new UserRepository();
            await user.updateUser(id, { name: name, role: role || "trainee", email: email })
                .then((result) => {
                    console.log("Trainee updated .......");
                    res.send({
                        status: "ok",
                        message: "Trainee Updated Successfully",
                        data: ({
                            originalId: id
                        })
                    });
                })
                .catch((err) => {
                    res.send({
                        status: 404,
                        message: 'Trainee Not Found for update',
                    });
                });
        }
        catch (err) {
            console.log("Inside error : ", err);
            res.send({
                status: "error",
                message: "Inside error ",
                error: err
            });
        }
    }
    delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("::::::::::::INSIDE DELETE METHOD::::::::::::");
            const { id } = req.query;
            this.userRepository.deleteData(id)
                .then((result) => {
                    console.log("Trainee Deleted Successfully");
                    res.send({
                        status: "ok",
                        message: "Trainee Deleted Successfully",
                        data: ({
                            id: id
                        })
                    });
                })
                .catch(() => {

                    console.log("User not found to be deleted");
                    res.send({
                        status: "error",
                        message: 'User not found to be deleted',
                        code: 404
                    });

                })
        }
        catch (err) {
            console.log("Inside error : ", err);
            res.send({
                status: "error",
                message: "Inside error ",
                error: err
            });
        }
    }
}
export default TraineeController.getInstance();