import { validateEmail } from './helpers';
import { IUsers } from '../../extraTs/interfaces';
let vldUser : String[]=[];
let inVldUser : String[]=[];
function validateUsers(user)
{
  user.forEach((element) =>
  {
    let { traineeEmail, reviewerEmail }=element;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) 
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
export {validateUsers};
