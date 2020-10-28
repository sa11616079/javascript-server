import { validateUsers } from "./utils/index";
import { diamond, equilateral } from "./pattern/index";
const users: IUsers[] =
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
      reviewerEmail: "shubham14@.jain@successive.tech"
    }
  ];

  validateUsers(users);
  diamond(10);
  equilateral(10);
  import {IUsers} from "./interfaces";

