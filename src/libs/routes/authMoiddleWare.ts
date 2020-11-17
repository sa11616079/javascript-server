import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import {hasPermission} from "../../libs/permissions";
import IRequest from "./IRequest";
import UserRepository from "../../repositories/user/UserRepository";
import config from "../../config/configuration";

export default (moduleName:object, permissionType:string) => (req:IRequest, res:Response, next:NextFunction) => {
  try 
  {
    //   console.log("The config is : ", moduleName, permissionType);
    //   console.log("Header is ", req.headers['authorization']);
      const token = req.headers['authorization'];
    //   eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdWNjZXNzaXZlIFRlY2hub2xvZ2llcyIsImlhdCI6MTYwNTU4ODI2NiwiZXhwIjoxNjM3MTI0MjY2LCJhdWQiOiJ3d3cuc3VjY2Vzc2l2ZS5pbiZxdW90Iiwic3ViIjoiTGVhcm4gYW5kIEltcGxlbWVudCIsIm5hbWUiOiJUcmFpbmVlIiwicm9sZSI6InRyYWluZWUiLCJlbWFpbCI6InRyYWluZWVAc3VjY2Vzc2l2ZS50ZWNoIiwicGFzc3dvcmQiOiIxMjMiLCJpZCI6IjVmYjM4OTdiZGQ3M2I0NDRlYzNhNzQwNyJ9.Idn_1YKcxEkYTzoZOMXR5cEDFKwEjzksCmy6FaWHwOs
      const secret=config.secretKey;
      const decodeUser = jwt.verify(token, secret);
      const role=decodeUser.role;
      const userRepository: UserRepository = new UserRepository();
      // console.log('User',decodeUser);
      userRepository.findOne({originalId:decodeUser.id})
      .then((result)=>{
        if(!result){
            console.log("user does not exist ");
            res.status(400).send({ message: "user does not exist", data: result });
        }
        else
        {
            if(hasPermission(moduleName,role,permissionType))
            {
                console.log(`${role} has permission ${permissionType} :true`);
            }
            else
            {
                next({error:"unauthorized",message:"Permission denied",status:403});
            }
        }
      })
      .catch((err)=>{console.log(err)});
      req.user=decodeUser;
      next();   
  }

  catch (err) {
      next({
          error: "Unauthorized",
          code: 403
      })
  }
}
