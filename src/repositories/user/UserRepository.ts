import * as mongoose from "mongoose";

import {userModel} from "./UserModel";
import IUserModel from "./IUserModel";
import VersionableRepository from "../versionable/VersioningRepository";

export default class UserRepository extends VersionableRepository<IUserModel,mongoose.Model<IUserModel>>
{
    public static generateObjectId(){
        return String(mongoose.Types.ObjectId());
    }

    constructor(){
        super(userModel);
    }

    public findOne(query):mongoose.DocumentQuery<IUserModel,IUserModel,{}>{
        return super.findOne(query).lean();
    }

    public find(query,projection ?:any,options ?:any):any{
        return super.find(query,projection,options);
    }

    public create(data:any):Promise<IUserModel>{
        const id=UserRepository.generateObjectId();
        const model=new userModel({
            _id:id,
            createdAt:Date.now(),
            originalId: id,
            ...data,
        });
        return model.save();
    }

    public update(data:any, id:any):Promise<IUserModel>{
        console.log("UserRepository :: update ",data);
        return super.update(data,id);
    }


    public deleteData(id:any, remover:any) {
        return super.delete(id, remover);
        }

    public count(query:any={}):any{
        return super.count(query);
    }
}