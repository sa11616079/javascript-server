let users=
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
let vldUser="",inVldUser="",count1=0,count2=0;
function validateEmail(email)
{
    return checkemail.test(String(email).toLowerCase());
}

function validateUsers()
{
    for(i=0;i<users.length;i++)
    {
      let  {traineeEmail , reviewerEmail} = users[i];
      if(validateEmail(traineeEmail) && validateEmail(reviewerEmail))
      {
        vldUser+="("+traineeEmail+" , "+reviewerEmail+") ";
        count1++;
      }
      else
      {
        inVldUser+="("+traineeEmail+" , "+reviewerEmail+") ";
        count2++;
      }
      
    }
    console.log("Total valid users : ",count1);
    console.log("valid users are : ",vldUser);
    console.log("Total Invalid users : ",count2);
    console.log("Invalid users are : ",inVldUser);
}
validateUsers();
