import {diamond} from './pattern/index.js';
import {equilateral} from './pattern/index.js';
import {hasPermission} from './utils/index.js';
import {permissions} from './constants.js';
import {validateUsers} from './utils/index.js';
import {validateEmail} from './utils/validation.js';
import {users} from './constants.js';
diamond(10);
console.log();
equilateral(10);
hasPermission(permissions.getUser1, "trainer", "delete");
validateUsers(users);
validateEmail()
