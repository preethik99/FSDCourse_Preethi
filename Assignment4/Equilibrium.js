//Question: Given N array elements count the numer of Equilibrium independent an index siad to be Equilibrium
//Equilibrium: Sum of all elements before ith index is equal to sum of elements after ith index

function equilibrium(a)
{
let cumarray=[a[0]];
let sum=0;
let equilibriumIndices = [];
for (let i=1;i<a.length;i++)
{
   sum= (cumarray[i-1]+a[i]);
   cumarray.push(sum);
}

console.log("Cumulative Array: ", cumarray); 
let n=cumarray.length;
let count=0;
for(let i=0;i<n;i++)
{
    let leftSide=cumarray[i-1];
    let rightSide=sum-cumarray[n-1]-cumarray[i];
    if(leftSide===rightSide)
    {
        equilibriumIndices.push(i);
        count++;
    }
}
if (count!=0)
{
return [equilibriumIndices,count];
}
else {return [-1,-1]}

}


let a=[-7, 1, 5, 2, -4, 3, 0];
let b=[1,2,3]

console.log("Equilibrium for array : ",a);
let [equilibriumA,countA]= equilibrium(a);
console.log("Equilibrium Indices ",equilibriumA);
console.log("Number of Equilibrium indices",countA);

console.log(" ");
console.log("Equilibrium for array : ",b);
let [equilibriumB,countB]=equilibrium(b);
console.log("Equilibrium Indices ",equilibriumB);
console.log("Number of Equilibrium indices",countB);