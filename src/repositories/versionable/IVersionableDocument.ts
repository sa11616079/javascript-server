import * as mongoose from "mongoose";

export default interface IVersionableDocument extends mongoose.Document{

    deletedAt:String;
    originalId:String;
    createdAt:String;
    updatedAt:Date;
}