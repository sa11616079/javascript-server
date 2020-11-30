// import * as mongoose from "mongoose";
import VersionableSchema from "../../repositories/versionable/VersionableSchema";

class UserSchema extends VersionableSchema{
    constructor(options:any){
        const baseSchema={
            _id:String,
            name:String,
            email:String,
            role:String,
            password:String,
        };
        super(baseSchema,options);
    }
}

export default UserSchema;
