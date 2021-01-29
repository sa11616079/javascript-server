import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { hasPermission } from "../../libs/permissions";
import IRequest from "./IRequest";
import UserRepository from "../../repositories/user/UserRepository";
import config from "../../config/configuration";

export default (moduleName: object, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
  try {
    console.log("::::::::::::INSIDE INSIDEAUTHMIDDLEWARE::::::::::::");
    const token = req.headers['authorization'];
    const secret = config.secretKey;
    async function verifyUser() {
      const decodeUser = await jwt.verify(token, secret);
      return decodeUser;
    }
    verifyUser().then((result) => {
      if (result) {
        const role = result['role'];
        const userRepository: UserRepository = new UserRepository();
        userRepository.find({ email: result['email'], originalId: result['originalId'], deletedAt: null })
          .then((result1) => {
            if (!result1) {

              console.log("user does not exist ");
              res.send({
                status: 404,
                message: "user does not exist",
                data: result1
              });
            }
            else {
              if (hasPermission(moduleName, role, permissionType)) {
                console.log(`${role} has permission ${permissionType} :true`);
                req.user = result1;
                next();
              }
              else {
                next({
                  status: 404,
                  error: "Unauthorized",
                  message: "Permission denied",
                });
              }
            }
          })
          .catch((err) => { console.log(err) });
      }
      else {
        console.log("Has problem in token");
      }
    })
      .catch((err) => {
        console.log("Error : ", err);
      })
  }
  catch (err) {
    next({
      error: "Unauthorized",
      status: 404
    })
  }
}
