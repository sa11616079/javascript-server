function largestElement()
{
    let x=[10,3,43,12,45,87];
    for(let i=0;i<x.length;i++)
    {
        if(x[0]<x[i])
        {
            x[0]=x[i];
        }
    }
    console.log("largset elemnt is ",x[0]);
}
largestElement();