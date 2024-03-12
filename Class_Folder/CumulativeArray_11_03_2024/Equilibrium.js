//Question: Given N array elements count the numer of Equilibrium independent an index siad to be Equilibrium
//Equilibrium: Sum of all elements before ith index is equal to sum of elements after ith index

let a=[-3,2,7,0,5,-5,1];

let cumarray=[a[0]];
let sum =0;
for (let i=1;i<a.length;i++)
{
    cumarray.push(cumarray[i-1]+a[i]);
}

console.log(cumarray); 
let n=cumarray.length;
let count=0;
for(let i=1;i<n-1;i++)
{
    let leftSide=cumarray[i-1];
    let rightSide=cumarray[n-1]-cumarray[i];
    if(leftSide===rightSide)
    {
        count++;
    }
}
console.log("Number of Equilibrium indices",count);