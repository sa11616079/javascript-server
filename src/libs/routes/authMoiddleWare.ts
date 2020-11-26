import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { hasPermission } from "../../libs/permissions";
import IRequest from "./IRequest";
import UserRepository from "../../repositories/user/UserRepository";
import config from "../../config/configuration";

export default (moduleName: object, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization'];
    const secret = config.secretKey;
    async function verifyUser() {
      const decodeUser = await jwt.verify(token, secret);
      return decodeUser;
    }
    verifyUser().then((result) => {
      if (result) {
        const role = result.role;
        const userRepository: UserRepository = new UserRepository();
        userRepository.findOne({ originalId: result.id })
          .then((result) => {
            if (!result) {
              console.log("user does not exist ");
              res.status(400).send({ message: "user does not exist", data: result });
            }
            else {
              if (hasPermission(moduleName, role, permissionType)) {
                console.log(`${role} has permission ${permissionType} :true`);
              }
              else {
                next({ error: "unauthorized", message: "Permission denied", status: 403 });
              }
            }
          })
          .catch((err) => { console.log(err) });
        req.user = result;
        next();
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
      code: 403
    })
  }
}
