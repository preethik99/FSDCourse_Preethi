// Problem Description
// A wire connects N light bulbs.

// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

// You can press the same switch multiple times.

// Note: 0 represents the bulb is off and 1 represents the bulb is on.


function bulbs(a,n)
{
    let newA=[];
    let count=0;
    for(let i=0;i<N;i++)
    {
        if(a[i]==0)
        {
            newA=[];
            a[i]=1;
            for(let k=0;k<=i;k++)
            {
                newA.push(a[k]);
            }
            
            for(let j=i+1;j<N;j++)
            {
                newA.push(a[j]^1);
            }
            a=newA;
            count++;
        }
    }

    return count;
}

let A=[0, 1, 0, 1];
let N=A.length;
console.log("Minimum number of switches pressed to turn on all the bulbs : ",bulbs(A,N));

let B=[1, 1, 1, 1];
let M=B.length;
console.log("Minimum number of switches pressed to turn on all the bulbs : ",bulbs(B,M));
