// Problem Description
// Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.
//NOTE: The rightmost element is always a leader.
//using Carry Forward Method


function LeadersinArray(a)
{
    let b=[a[a.length-1]];
    let max=a[a.length-1];
    let count=1;
    for(let i =a.length-2;i>=0;i--)
    {
        if(a[i]>max)
        {
            max=a[i];
            b.push(max);
            count++;
        }
    }
    return b;
}

let a=[16, 17, 4, 3, 5, 2];
console.log("Leaders present in array are: ",LeadersinArray(a));

let b=[5, 4];
console.log("Leaders present in array are: ",LeadersinArray(b));



