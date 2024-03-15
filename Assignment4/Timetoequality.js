/*Given an integer array A of size N. In one second, you can increase the value of one element by 1.

Find the minimum time in seconds to make all elements of the array equal.*/

function timetoequality(A)
{
    let max=Number.MIN_VALUE;
    for(let i=0;i<A.length;i++)
    {
        if(max<A[i])
        {
            max=A[i];
        }
    }

    let totalsec=0;
    for(let j=0;j<A.length;j++)
    {
        totalsec=totalsec+(max-A[j]);
    }

    return totalsec;
}

let A = [2, 4, 1, 3, 2];
let sec=timetoequality(A);
console.log("The minimum time in seconds to make all elements of the array equal is : ",sec); // Output is 8