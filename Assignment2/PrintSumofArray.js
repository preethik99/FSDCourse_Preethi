function printarrayusingfor(arr)
{
    console.log("Printing the sum of array using For loop");
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}

function printarrayusingwhile(arr)
{
    console.log("Printing the sum of array using While loop");
    let i=0;
    let sum=0;
    while(i<arr.length)
    {
        sum+=arr[i];
        i++; 
    } 
    return sum;
}



let arr=[2,58,97,60];
let arr1=[1,2,3];
let sum = printarrayusingfor(arr);
console.log("The Sum of array using For loop:", sum);
let sum1= printarrayusingwhile(arr1);
console.log("The Sum of array using while loop:", sum1);