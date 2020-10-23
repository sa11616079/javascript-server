const users =
  [
    {
      traineeEmail: "satish1.patel@successive.tech",
      reviewerEmail: "shubham1.jain@successive.tech",
    },
    {
      traineeEmail: "satish2.patel@successive.tech",
      reviewerEmail: "shubham2.jain@successive.tech",
    },
    {
      traineeEmail: "satish13.patel@successive.tech1",
      reviewerEmail: "shubham13.jain@successive.tech",
    },
    {
      traineeEmail: "satish14.patel@successive.tech",
      reviewerEmail: "shubham4@.jain@successive.tech",
    }
  ];
const checkemail = /^[A-Za-z.0-9]{3,}@[A-Za-z]{10,10}[.]{1,1}[A-Za-z]{4,4}$/;
let vldUser = [], inVldUser = [];
validateEmail=(email)=>
{
  return checkemail.test(String(email).toLowerCase());
}
function validateUsers(userArray) 
{
  userArray.forEach((element) =>
  {
    let { traineeEmail, reviewerEmail }=element;
    (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) ? vldUser.push(element) : inVldUser.push(element);
});
console.log("Total valid users : ", vldUser.length);
console.log("valid users are : ", vldUser);
console.log("Total Invalid users : ", inVldUser.length);
console.log("Invalid users are : ", inVldUser);
}
validateUsers(users);
