// Given an array find the length of Max sub array which contains both max and min of array

let a=[1,2,3,6,3,4,6];
let min = Number.MAX_VALUE;
let max= Number.MIN_VALUE;
for (let i=0;i<a.length;i++)
{
    if(min>a[i])
    {
        min=a[i];
    }
    if(max<a[i])
    {
        max=a[i];
    }
}

console.log("The min value present in the array :" , min);
console.log("The min value present in the array :" , max);

let max_len =Number.MIN_VALUE;
for(let L=0;L<a.length;L++)
{
    if(a[L]==min)
    {
        for(let R=L+1;R<a.length;R++)
        {
            if(a[R]==max)
            {
                let subarrLength=R-L+1;
                if(max_len<subarrLength)
                {
                    max_len=subarrLength;
                }
            }
        }
    }
    else if(a[L]==max)
    {
        for(let R=L+1;R<a.length;R++)
        {
            if(a[R]==min)
            {
                let subarrLength=R-L+1;
                if(max_len<subarrLength)
                {
                    max_len=subarrLength;
                }
            }
        }
    }
}

console.log("Length of smallest sub array which contains both max and min of array is: ",max_len);