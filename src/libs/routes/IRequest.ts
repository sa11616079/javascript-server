import {Request} from "express";

import IUserModel from "../../repositories/user/IUserModel";
interface IRequest extends Request {
  body: any,
  param: any,
  query: any,
  user : IUserModel;
} 

export default IRequest;
