import { Request, Response, NextFunction } from "express";

class TraineeController{
    static instance:TraineeController

    static getInstance(){
        if(TraineeController.instance){
            return TraineeController.instance;
        }
        TraineeController.instance=new TraineeController();
        return TraineeController.instance;
    }

    get(req:Request,res:Response,next:NextFunction){
        try{
            res.send({
                message:"Trainee fetched successfully",
                data:
                {
                    name:"Trainee1",
                    address:"Noida"
                }
            });
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    create(req:Request,res:Response,next:NextFunction){
        try{
            console.log("Inside post methode of Trainee Controller");
            res.send({
                message:"Trainee created successfully",
                data:
                {
                    name:"Trainee1",
                    address:"Noida"
                }
            });
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    update(req:Request,res:Response,next:NextFunction){
        try{
            console.log("Inside update methode of Trainee Controller");
            res.send({
                message:"Trainee updated successfully",
                data:
                {
                    name:"Trainee1",
                    address:"Noida"
                }
            });
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }

    delete(req:Request,res:Response,next:NextFunction){
        try{
            console.log("Inside delete methode of Trainee Controller");
            res.send({
                message:"Trainee deleted successfully",
                data:
                {
                    name:"Trainee1",
                    address:"Noida"
                }
            });
        }
        catch(err)
        {
            console.log("Inside error",err);
        }
    }
}

export default TraineeController.getInstance();
