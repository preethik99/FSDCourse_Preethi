function factorial(n) 
{
    if (n === 1) 
    {
        return 1;
    }
    return factorial(n - 1) * n;
}

let r = factorial(5);
console.log(r);

