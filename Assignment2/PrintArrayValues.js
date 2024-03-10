function printarrayusingfor(arr)
{
    console.log("Printing the array values using For loop");
    for(let i=0;i<arr.length;i++)
    {
        console.log("Array Index ", i ," has value : ", arr[i]);
    }
}

function printarrayusingwhile(arr)
{
    console.log("Printing the array values using While loop");
    let i=0;
    while(i<arr.length)
    {
        console.log("Array Index ", i ," has value : ", arr[i]);
        i++; 
    } 
}



let arr=[2,58,97,60];
printarrayusingfor(arr);
printarrayusingwhile(arr);