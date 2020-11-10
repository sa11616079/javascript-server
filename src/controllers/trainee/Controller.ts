import { Request, Response, NextFunction } from "express";
import UserRepository from "../../repositories/user/UserRepository";

class TraineeController{
    static instance:TraineeController

    static getInstance(){
        if(TraineeController.instance){
            return TraineeController.instance;
        }
        TraineeController.instance=new TraineeController();
        return TraineeController.instance;
    }
    constructor(){
        this.get=this.get.bind(this);
    }
    userRepository:UserRepository=new UserRepository();

    get=(req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log("Inside get request for user");
            this.userRepository.find({role:"trainee"},{},{})
            .then((res)=>{
                console.log("Response is : ",res);
            })
            const data=
            [
                {
                    name:"trainee"
                }
            ]
            res.status(200).send({message:"successfully fetched trainee",data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    create=(req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log("Inside create request for user");
            this.userRepository.find({role:"trainee"},{},{})
            .then((res)=>{
                console.log("Response is : ",res);
            })
            const data=
            [
                {
                    name:"trainee",
                }
            ]
            res.status(200).send({message:"successfully fetched trainee",data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    update=(req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log("Inside update request for user");
            this.userRepository.find({role:"trainee"},{},{})
            .then((res)=>{
                console.log("Response is : ",res);
            })
            const data=
            [
                {
                    name:"trainee",
                }
            ]
            res.status(200).send({message:"successfully fetched trainee",data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    delete=(req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log("Inside delete request for user");
            this.userRepository.find({role:"trainee"},{},{})
            .then((res)=>{
                console.log("Response is : ",res);
            })
            const data=
            [
                {
                    name:"trainee",
                }
            ]
            res.status(200).send({message:"successfully fetched trainee",data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }
}

export default TraineeController.getInstance();
