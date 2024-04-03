// Given N numbers where each number is occuring two times expect one number find that number
//Using XOR operator

function findnonDuplicate(arr)
{
    let output=0;
    for(let i=0;i<arr.length;i++)
    {
            output^=arr[i];
            console.log(output);
    }
  return output;
}


let arr=[1,1,2,2,11,3,3,12];
let number= findnonDuplicate(arr);
console.log("The non-duplicate number is:", number);
