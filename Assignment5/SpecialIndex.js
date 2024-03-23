//Given an array, arr[] of size N, the task is to find the count of array indices such that 
//removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

function specialIndex(arr)
{
    let count=0
    for(let i=0;i<arr.length;i++)
    {
        let oddSum=0
        let evenSum=0
        
        let ele=arr[i]
        arr.splice(i,1)
    
        for(let j=0;j<arr.length;j++)
        {
            if(j%2==0)
            {
                evenSum+=arr[j]
            }
            else
            {
                oddSum+=arr[j]
            }

        }
        if(evenSum==oddSum)
        {
            count++
        }
        arr.splice(i,0,ele)
    }
    return count
}

let a=[2,1,6,4]
console.log("Count of special indices: ",specialIndex(a)) //outpot: 1

let b=[1,1,1]
console.log("Count of special indices: ",specialIndex(b)) //outpot: 3
