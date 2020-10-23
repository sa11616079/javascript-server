function displayprimeBTWToIntervals(n1,n2)
{
    let flag,s1="";
    while(n1<n2)
    {
        flag=0;
        for(let i=2;i<=n1/2;i++)
        {
            if(n1%i==0)
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            s1+=n1+" ";
        }
        n1++;
    }
    console.log(`prime number is ${s1}`);
}
displayprimeBTWToIntervals(1,20);
displayprimeBTWToIntervals(45,200);