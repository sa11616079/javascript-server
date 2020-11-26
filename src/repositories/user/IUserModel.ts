import * as mongoose from "mongoose";

export default interface IUserModel extends mongoose.Document{
    id:String;
    name:String;
    email:String;
    role:String;
    password:String;
}