import * as mongoose from "mongoose";
import seedData from "./seedData";

class Database
{
    static open(mongoURL)
    {
        return new Promise((resolve,reject)=>
        {
            console.log("Inside open method");
            mongoose.connect(mongoURL , { useNewUrlParser: true , useUnifiedTopology: true },(err)=>
            {
                if(err)
                {
                    console.log(err);
                    reject(err);
                    return;
                }
                seedData();
                resolve(null);
            });
        // console.log("Successfully connected to Mongo");
        
        });
    }
    static disconnect()
    {
        mongoose.connection.close((err)=>{
            if(err)
            {
                console.log(err);
                return;
            }
        });
        console.log("Inside disconnect methode");
    }
}

export default Database;
