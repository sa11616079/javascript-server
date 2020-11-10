import * as mongoose from "mongoose";
import {DocumentQuery,Query} from "mongoose";

export default class VersioningRepository<D extends mongoose.Document,M extends mongoose.Model<D>>
{
    public static generateObjectId(){
        return String(mongoose.Types.ObjectId());
    }

    private model:M;
    constructor(model){
        this.model=model;
    }

    public async create(options:any):Promise<D>{
        console.log("VersioningRepository :: create ",options);
        const id=VersioningRepository.generateObjectId();
        const model=new this.model({
            ...options,
            _id:id,
            originalId:id,
            deletedAt:Date.now,
        });
        return await model.save();
    }

    public count(query:any):Query<number>{
        const finalQuery={deleteAt:null,...query};
        return this.model.countDocuments(finalQuery);
    }

    public getAll(query:any={},projection:any={},options:any={}):DocumentQuery<D[],D>{
        const finalQuery={deletedAt:null,...query};
        return this.model.find(finalQuery,projection,options);
    }

    public findOne(query:any):mongoose.DocumentQuery<D,D>{
        const finalQuery={deleteAt:null,...query};
        return this.model.findOne(finalQuery);
    }

    public find(query:any={},projection:any={},options:any={}):DocumentQuery<D[],D>{
        const finalQuery={deleteAt:null,...query};
        return this.model.find(finalQuery,projection,options);
    }
    public invalidate(id:any):DocumentQuery<D,D>{
        return this.model.update({originalId: id,deletedAt:null},{});
    }

    public async update(data:any):Promise<D>{
        console.log("Looking for privious valid document ");
        const prev=await this.findOne({originalId:data.originalId,deletedAt:null});
        console.log("Prev : ",prev);
        if(prev)
        {
            await this.invalidate(data.originalId);
        }
        else
        {
            return null;
        }
        console.log("Data : ",data);
        const newData=Object.assign(JSON.parse(JSON.stringify(prev)),data);
        console.log("newData : ",newData);
        newData._id=VersioningRepository.generateObjectId();
        delete newData.deleteAt;

        const model=new this.model(newData);
        return model.save();
    }
}