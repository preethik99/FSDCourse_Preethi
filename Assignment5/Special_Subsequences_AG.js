// Problem Description
// You have given a string A having Uppercase English letters.

// You have to find how many times subsequence "AG" is there in the given string.

function SpecialSubsequences(A)
{
    let Gcount=0;
    let Acount=0;
    for(let i=A.length-1; i>=0 ; i--)
    {
        if(A[i]=="G")
        {
            Gcount++;
        }
        if(A[i]=="A")
        {
            Acount+=Gcount;
        }
    }
    return Acount;
}

let a="ABCGAG";
let A=a.split('');
console.log("Subsequence AG is " ,SpecialSubsequences(A)," times in given. ");

let b="GAB";
let B=b.split('');
console.log("Subsequence AG is " ,SpecialSubsequences(B)," times in given. ");
