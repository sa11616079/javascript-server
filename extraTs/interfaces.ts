interface Ipermissions{
    "getUser1":{
        all:String[];
        read:String[];
        write:String[];
        delete:String[];
    },
    "getUser2":{
        all:String[];
        read:String[];
        write:String[];
        delete:String[];
    }
};

interface IUsers{
    traineeEmail:String;
    reviewerEmail:String;
};

export {Ipermissions};
export {IUsers};
