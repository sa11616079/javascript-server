let vldUser = [], inVldUser = [];
import {validateEmail} from './helpers.js';

function validateUsers(user) 
{
  user.forEach((element) =>
  {
    let { traineeEmail, reviewerEmail }=element;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) 
    {
      vldUser.push(element);
    }
    else
    {
      inVldUser.push(element);
    }
});
console.log("Total valid users : ", vldUser.length);
console.log("valid users are : ", vldUser);
console.log("Total Invalid users : ", inVldUser.length);
console.log("Invalid users are : ", inVldUser);
}
// validateUsers(users);
export default validateUsers;
