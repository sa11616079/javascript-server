import * as jwt from "jsonwebtoken";
import {hasPermission} from "../../libs/permissions";
import {permissions} from "../../libs/constants";
import { Request, Response, NextFunction } from "express";
import { error } from "console";

export default (moduleName:string, permissionType:string) => (req:Request, res:Response, next:NextFunction) => {
    try 
    {
        console.log("The config is : ", moduleName, permissionType);
        console.log("Header is ", req.headers['authorization']);
        const token = req.headers['authorization'];
        const decodeUser = jwt.verify(token, 'fQ5JGYpHyISVsBr2OFHHuV1z4cO0nFmL');  
        const role=decodeUser.role;
        console.log('User',decodeUser);
        if(hasPermission(moduleName,role,permissionType))
        {
            console.log(`${role} has permission ${permissionType} : true`);
            next();
        }
        else
        {
            throw error;
        }
        
    }

    catch (err) {
        next({
            error: "Unauthorized",
            code: 403
        })
    }
}