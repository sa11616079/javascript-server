import {diamond} from './pattern/index.js';
import {equilateral} from './pattern/index.js';
import {hasPermission} from './utils/index.js';
import {permissions} from './constants.js';
import {validateUsers} from './utils/index.js';
import {users} from './utils/helpers.js';

diamond(5);
diamond(10);
console.log();
equilateral(5);
equilateral(10);
console.log();
hasPermission(permissions.getUser1, "trainer", "delete");
hasPermission(permissions.getUser1, "trainee", "read");
console.log();
validateUsers(users);
