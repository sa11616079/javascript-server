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
let {getUser1,getUsers2}=permissions;
function hasPermission(moduleName, role, permissionType) {
    if (!moduleName.hasOwnProperty(permissionType)) {
        console.log(`Object not having any ${permissionType} property`);
    }
    else if (moduleName[permissionType].includes(role) || role == "head-trainer") {
        console.log(`${role} can perform ${permissionType} action : true`);
    }
    else {
        console.log(`${role} can perform ${permissionType} action : false`);
    }
}
hasPermission(getUser1,"head-trainer", "delete");

