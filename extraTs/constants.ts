import {Ipermissions} from './interfaces'
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
export {Ipermissions};
const users =
  [
    {
      traineeEmail: "satish1.patel@successive.tech",
      reviewerEmail: "shubham1.jain@successive.tech"
    },
    {
      traineeEmail: "satish2.patel@successive.tech",
      reviewerEmail: "shubham2.jain@successive.tech"
    },
    {
      traineeEmail: "satish13.patel@successive.tech",
      reviewerEmail: "shubham13.jain@successive.tech"
    },
    {
      traineeEmail: "satish14.patel@successive.tech",
      reviewerEmail: "shubham4@.jain@successive.tech"
    }
  ];
  export{users};
