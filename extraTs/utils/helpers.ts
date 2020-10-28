let checkemail = /^[A-Za-z.0-9]{3,}@[A-Za-z]{10,10}[.]{1,1}[A-Za-z]{4,4}$/;
export function validateEmail(email:string) 
{
  return checkemail.test(String(email).toLowerCase());
}
