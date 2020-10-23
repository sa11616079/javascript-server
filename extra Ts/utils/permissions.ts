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
export {hasPermission};
