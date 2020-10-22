function validateEmail(email) 
{
  return checkemail.test(String(email).toLowerCase());
}
export {validateEmail};
