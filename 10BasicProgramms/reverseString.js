function reverseString(str)
{
    let s1="";
    for(let i=str.length-1;i>=0;i--)
    {
        s1+=str[i];
    }
    console.log(`after reverse string is ${s1}`);
}
reverseString("satish");
reverseString("sadsrfdg");
