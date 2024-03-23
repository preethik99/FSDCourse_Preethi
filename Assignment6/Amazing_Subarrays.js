// You are given a string S, and you have to find all the amazing substrings of S.

// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).



function AmaxingSubarrays(a)
{
let count=0;
for(let L=0;L<a.length;L++)
{
    for(let R=L;R<a.length;R++)
    {
        if(a[L]=='A'||a[L]=='E'||a[L]=='I'||a[L]=='O'||a[L]=='U'||a[L]=='a'||a[L]=='e'||a[L]=='i'||a[L]=='o'||a[L]=='u')
        {
            console.log("Subarray :", a.slice(L, R + 1));
            count++;
        }
    }
}
return count;

}

let b="ABEC".split('');
let count=AmaxingSubarrays(b);
let countmod=count%10003;
console.log("here number of substrings are" ,count, " and ",count, " % 10003 = ", countmod);

console.log("----------------------------------------------------------------------------");

let a="AbcdeFGIO".split('');
count=AmaxingSubarrays(a);
countmod=count%10003;
console.log("here number of substrings are" ,count, " and ",count, " % 10003 = ", countmod);


