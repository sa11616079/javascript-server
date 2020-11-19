import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { hasPermission } from "../../libs/permissions";
import IRequest from "./IRequest";
import UserRepository from "../../repositories/user/UserRepository";
import config from "../../config/configuration";

export default (moduleName: object, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
  try {
    //   console.log("The config is : ", moduleName, permissionType);
    //   console.log("Header is ", req.headers['authorization']);
    const token = req.headers['authorization'];
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDU3OTM4MjYsImV4cCI6MTYzNzMyOTgyNiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5hbWUiOiJUcmFpbmVlIiwiZW1haWwiOiJ0cmFpbmVlQHN1Y2Nlc3NpdmUudGVjaCIsInJvbGUiOiJ0cmFpbmVlIiwiaWQiOiI1ZmI2NzFjMmYyY2RiZDU2MWIwMjgzNDIifQ.LtTvYELFG01HKHjVcdR5Q984VuQGpD-07Dtwpt_-yBs
    const secret = config.secretKey;
    async function verifyUser() {
      const decodeUser = await jwt.verify(token, secret);
      return decodeUser;
    }
    verifyUser().then((result) => {
      // console.log("result is :",result)
      if (result) {
        const role = result.role;
        const userRepository: UserRepository = new UserRepository();
        // console.log('User',);
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
