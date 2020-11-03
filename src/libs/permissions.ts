function hasPermission(moduleName:object, role:string, permissionType:string) {
    if (!moduleName.hasOwnProperty(permissionType)) {
        return false;
    }
    else if (moduleName[permissionType].includes(role) || role == "head-trainer") {
        return true
    }
    else {
        return false;
    }
}
export {hasPermission};
