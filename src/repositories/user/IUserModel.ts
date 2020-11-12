import * as mongoose from "mongoose";
import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableDocument{
    id:String;
    name:String;
    email:String;
    role:String;
    password:String;
}