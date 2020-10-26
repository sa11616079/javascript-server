const permissions =
{
    'getUser1':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    },
    'getUsers2':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    }
};

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

export {permissions};
export {users};
