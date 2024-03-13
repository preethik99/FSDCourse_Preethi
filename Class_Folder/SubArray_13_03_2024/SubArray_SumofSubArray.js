//Sub Arrays are continious part of the array with same order
// Question:Given an array of length N then find the sum of possible sub arrays

let a=[5,8,7,9,2];
let b=[];
let sum=0;
let cumarray=[a[0]];

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
        console.log("Subarray:", a.slice(L, R + 1),"; Sum:", sum);
    }
    console.log(" ");
    sum=0;
}

/*Output: 

(1) [5] Sum: 5
Subarray: (2) [5, 8] Sum: 13
Subarray: (3) [5, 8, 7] Sum: 20
Subarray: (4) [5, 8, 7, 9] Sum: 29
Subarray: (5) [5, 8, 7, 9, 2] Sum: 31


Subarray: (1) [8] Sum: (1) [8]
Subarray: (2) [8, 7] Sum: (1) [15]
Subarray: (3) [8, 7, 9] Sum: (1) [24]
Subarray: (4) [8, 7, 9, 2] Sum: (1) [26]


Subarray: (1) [7] Sum: (1) [7]
Subarray: (2) [7, 9] Sum: (1) [16]
Subarray: (3) [7, 9, 2] Sum: (1) [18]

Subarray: (1) [9] Sum: (1) [9]
Subarray: (2) [9, 2] Sum: (1) [11]

Subarray: (1) [2] Sum: (1) [2]

*/