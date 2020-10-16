function vowels(str)
{
    let s1="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || 
        str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U')
        {
            s1+=str[i]+" ";
        }
    }
    console.log("vowels present in ",str+" are : ",s1);
}
vowels("hisjdfeevsAo");
vowels("hisjdfeeengghi");