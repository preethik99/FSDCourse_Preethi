//Question: 
// Find the maximum sum of contiguous non-empty subarray within an array A of length N.

let a=[1, 2, 3, 4, -10];
let b=[];
let sum=0;
let cumarray=[a[0]];
let max=Number.MIN_VALUE;
let subarray
for (let i=1;i<a.length;i++)
{
    cumarray.push(cumarray[i-1]+a[i]);
}

for(let L=0;L<a.length;L++)
{
    for(let R=L;R<a.length;R++)
    {
        if(L==0)
        {sum=cumarray[R];}
        else
        {sum=[cumarray[R]-cumarray[L-1]];}
        //console.log("Subarray:", a.slice(L, R + 1), "Sum:", sum);
        if(max<sum)
        {
            subarray= a.slice(L, R + 1)
            max=sum;
        }
    }
   
    sum=0;
}
console.log("Subarray having Max value is :", subarray);
console.log("Maximum value is : ", max);
