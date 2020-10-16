function lcm(n1,n2)
{
    let max=0;
    if(n1>n2)
    {
        max=n1;
    }
    else if(n1<n2)
    {
        max=n2;
    }
    else
    {
        max=n1;
    }
    do
    {
        if(max%n1==0 && max%n2==0)
        {
            console.log("LCM of "+n1+" and "+n2+" is ",max);
            break;
        }
        else
        {
            max++;
        }
    }
    while(true);
}
lcm(18,12);
lcm(10,23);