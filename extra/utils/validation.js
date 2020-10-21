let users =
  [
    {
      traineeEmail: "satish1.patel@successive.tech",
      reviewerEmail: "shubham1.jain@successive.tech"
    },
    {
      traineeEmail: "satish2.patel@successive.tech",
      reviewerEmail: "shubham2.jain@successive.tech"
    },
    {
      traineeEmail: "satish13.patel@successive.tech",
      reviewerEmail: "shubham13.jain@successive.tech"
    },
    {
      traineeEmail: "satish14.patel@successive.tech",
      reviewerEmail: "shubham4@.jain@successive.tech"
    }
  ];
let checkemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let vldUser = [], inVldUser = [];
function validateEmail(email) 
{
  return checkemail.test(String(email).toLowerCase());
}

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
validateUsers(users);
