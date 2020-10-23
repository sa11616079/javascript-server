"use strict";
// import {diamond} from './pattern/index.js';
// import {equilateral} from './pattern/index.js';
// import {hasPermission} from './utils/index.js';
// import {permissions} from './constants.js';
// import {validateUsers} from './utils/index.js';
// import {users} from './utils/helpers.js';
Object.defineProperty(exports, "__esModule", { value: true });
// import { IUsers } from "./interfaces";
const index_1 = require("./utils/index");
// diamond(5);
// diamond(10);
// console.log();
// equilateral(5);
// equilateral(10);
// console.log();
// hasPermission(permissions.getUser1, "trainer", "delete");
// hasPermission(permissions.getUser1, "trainee", "read");
// console.log();
// validateUsers(users);
//helper.js
const users = [
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
index_1.validateUsers(users);
//# sourceMappingURL=index.js.map