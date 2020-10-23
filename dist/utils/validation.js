"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateUsers = void 0;
let checkemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let vldUser = [];
let inVldUser = [];
function validateEmail(email) {
    return checkemail.test(String(email).toLowerCase());
}
exports.validateEmail = validateEmail;
function validateUsers(user) {
    user.forEach((element) => {
        let { traineeEmail, reviewerEmail } = element;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            vldUser.push(element);
        }
        else {
            inVldUser.push(element);
        }
    });
    console.log("Total valid users : ", vldUser.length);
    console.log("valid users are : ", vldUser);
    console.log("Total Invalid users : ", inVldUser.length);
    console.log("Invalid users are : ", inVldUser);
}
exports.validateUsers = validateUsers;
//# sourceMappingURL=validation.js.map