//Cumulative is the sum of all previous indexes plus itself value of an array

let a=[-1,3,4,12,8,-5] //Input array
let cumarray=[a[0]];
let sum =0;
for (let i=1;i<a.length;i++)
{
    cumarray.push(cumarray[i-1]+a[i]);
}

console.log(cumarray); 

//output
//[-1, 2, 6, 18, 26, 21] 

// Sum of range
//Printing the range of values [0,3] [5,8] for below array
//Formula: Sum[L,R]=Cumarray[R]-Cumarray[L-1], when L!=0
//When L= 0; Sum[L,R]=Cumarray[R]

console.log("Sum of range")
let b=[1,-5,6,9,8,7,25,3,13,5];

let cumarray1=[b[0]];
let sum1 =0;
for (let i=1;i<b.length;i++)
{
    cumarray1.push(cumarray1[i-1]+b[i]);
}
console.log(cumarray1);
let sum_03=cumarray1[3];
console.log("Sum of range [0,3] is : ",sum_03); // outout is 11
let sum_58=cumarray1[8]-cumarray1[4];
console.log("Sum of range [5,8] is ",sum_58); //Output is 48

//Output:
//[1, -4, 2, 11, 19, 26, 51, 54, 67, 72]

//Sum of range [0,3] is :  11

//Sum of range [5,8] is  48