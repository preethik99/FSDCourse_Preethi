//Sub Arrays are continious part of the array with same order
// Question:Given an array of length N then find the possible sub arrays

let a=[5,8,7,9,2];
let b=[];
let cumarray;
for(let i=0;i<a.length;i++)
{
    for(let j=i;j<a.length;j++ )
    {
        for(let k=i; k<=j;k++)
        {
           b.push(a[k]); 
        }
        console.log(b);
        b=[];
    }
}

//output

/*[5]
[5, 8]
[5, 8, 7]
[5, 8, 7, 9]
[5, 8, 7, 9, 2]

[8]
[8, 7]
[8, 7, 9]
[8, 7, 9, 2]

[7]
[7, 9]
[7, 9, 2]

[9]
[9, 2]
[2]*/