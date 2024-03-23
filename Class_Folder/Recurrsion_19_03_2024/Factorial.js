function factorial(n) 
{
    if (n === 1) 
    {
        return 1;
    }
    return factorial(n - 1) * n;
}

let r = factorial(2);
console.log(r);

