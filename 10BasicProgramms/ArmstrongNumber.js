function Armstrong(n)
{
    let sum=0,r,n1;
    n1=n;
    while(n!=0)
    {
        r=n%10;
        sum=sum+r*r*r;
        n=parseInt(n/10);
    }
    if(n1==sum)
    {
        console.log(n1+" is a armstrong number");
    }
    else
    {
        console.log(n1+" is not a armstrong number");
    }

}
Armstrong(133);
Armstrong(153);