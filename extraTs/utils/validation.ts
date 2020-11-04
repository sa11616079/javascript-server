import { validateEmail } from './helpers';
import { IUsers } from './extraTs/interface';
let vldUser : String[]=[];
let inVldUser : String[]=[];
function validateUsers(user: IUsers)
{
  user.forEach((element) =>
  {
    let { traineeEmail, reviewerEmail }=element;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) 
    if (validateEmail(traineeEmail):boolean && validateEmail(reviewerEmail):boolean) 
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
