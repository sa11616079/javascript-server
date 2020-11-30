import {diamond} from './pattern/index.js';
import {equilateral} from './pattern/index.js';
diamond(10);
console.log();
equilateral(10);

import {hasPermission} from './utils/index.js';
import {permissions} from './constants.js';
import {validateUsers} from './utils/index.js';
import {users} from './constants.js';
hasPermission(permissions.getUser1, "trainer", "delete");
validateUsers(users);

