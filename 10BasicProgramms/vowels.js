function vowels(str)
{
    let s1="",s2=String(str).toLowerCase();
    for(let i=0;i<s2.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
        {
            s1+=str[i]+" ";
        }
    }
    console.log(`vowels present in ${str} are : ${s1}`);
}
vowels("hisjdfeevsAo");
vowels("hisjdfeeengghi");
