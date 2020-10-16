function triangle(noOfRows)
{
    let s1="";
    for(let i=0;i<=noOfRows;i++)
    {
        for(let j=1;j<=i;j++)
        {
            s1+="* ";
        }
        console.log(s1);
        s1="";
    }   
}
triangle(10);
triangle(6);