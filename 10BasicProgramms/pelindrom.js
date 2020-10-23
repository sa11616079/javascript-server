function pelindrom(no)
{
    let rev=0,r,n1;
    n1=no;
    while(no!=0)
    {
        r=no%10;
        rev=rev*10+r;
        no=parseInt(no/10);
    }
    if(n1==rev)
    {
        console.log(n1 +" given number is pelindrom");
    }
    else
    {
        console.log(n1 +" number is not pelindrom");
    }
}
pelindrom(121);
pelindrom(123);
