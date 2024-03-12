// Question: For the given array count the leaders 
// An element is called leader if that element is greater than all the elements on the right of it
console.log("code with using Carry Forward Method");
let a=[5,7,6,1,-1,0,5,2];
let b=[a[a.length-1]];
let max=a[a.length-1];
let count=1;
for(let i =a.length-2;i>=0;i--)
{
    if(a[i]>max)
    {
        max=a[i];
        b.push(max);
        count++;
    }
}
console.log("Leaders present in array are: ",b);
console.log("Count of leaders: ", count);


