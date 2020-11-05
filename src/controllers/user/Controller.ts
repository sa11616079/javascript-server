import { Request, Response, NextFunction } from "express";

class UserController{
    static instance:UserController

    static getInstance(){
        if(UserController.instance){
            return UserController.instance;
        }
        UserController.instance=new UserController();
        return UserController.instance;
    }

    get(req:Request,res:Response,next:NextFunction){
        try{
            console.log("Inside get request for user");
            const data=
            [
                {
                    name:"user1",
                    address:"Noida"
                }
            ]
            res.status(200).send({message:"successfully fetched users",Data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    create(req:Request,res:Response,next:NextFunction){
        try{
            console.log("Inside post request for user");
            const data=
            [
                {
                    name:"user1",
                    address:"Noida"
                }
            ]
            res.status(200).send({message:"successfully fetched users",Data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    update(req:Request,res:Response,next:NextFunction){
        try{
            console.log("Inside update request for user");
            const data=
            [
                {
                    name:"user1",
                    address:"Noida"
                }
            ]
            res.status(200).send({message:"successfully fetched users",Data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    delete(req:Request,res:Response,next:NextFunction){
        try{
            console.log("Inside delete request for user");
            const data=
            [
                {
                    name:"user1",
                    address:"Noida"
                }
            ]
            res.status(200).send({message:"successfully fetched users",Data:data});
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }
}

export default UserController.getInstance();
