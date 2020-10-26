function fibonacci(n)
{
    let t1 = 0, t2 = 1, nextTerm = 0,s1="",s2="",s3="";
    for (let i = 1; i <= n; i++)
    {
        if(i == 1)
        {
            s1+=t1+" ";
            continue;
        }
        if(i == 2)
        {
            s2+=t2+" ";
            continue;
        }
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
        s3+=nextTerm+" ";
        
    }
    console.log(`${s1} ${s2} ${s3}`);
}
fibonacci(10);
fibonacci(15);
