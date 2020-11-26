import * as mongoose from "mongoose";

export default interface IVersionableDocument extends mongoose.Document{

    originalId:String;
    createdAt:Date;
    deletedAt:Date;
    updatedAt:Date;
    deletedBy:String;
    updatedBy:String;
    createdBy:String;
}