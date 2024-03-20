//Given an integer array how to print duplicate numbers

function printDuplicateValues(a)
{
    let arr_obj={};
    for(let num of a)
    {
        if(arr_obj[num])
        {
            arr_obj[num]++;
        }
        else
        {
            arr_obj[num]=1;
        }
    }

    let duplicate=[];

    for(let key in arr_obj)
    {
        if(arr_obj[key]>1)
        {
            duplicate.push(key);
        }
    }

    return duplicate;
}

let a=[2,2,3,1,3,4,5,6,6];
let duplicateValues = printDuplicateValues(a);
console.log("Duplicate Values in an Array:", duplicateValues);