const permissions : Ipermissions={
    'getUser1':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    },
    'getUser2':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    }
};

import { Ipermissions , IUsers} from "./interfaces";
// export {permissions};
