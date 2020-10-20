function Armstrong(n)
{
    let sum=0,r,n1;
    let d=n.toString().length;
    n1=n;
    while(n!=0)
    {
        r=n%10;
        sum=sum+Math.pow(r,d);
        n=parseInt(n/10);
    }
    if(n1==sum)
    {
        console.log(`${n1} is a armstrong number`);
    }
    else
    {
        console.log(`${n2} is not a armstrong number`);
    }

}
Armstrong(1634);
Armstrong(153);
