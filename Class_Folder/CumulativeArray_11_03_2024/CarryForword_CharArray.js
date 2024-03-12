//Question: Find the count of pair(i,j) such that i<j and s[i]='a' and s[j]='g'

//code without using Carry Forward Method
let s=['b','a','a','g','x','d','c','a','g'];

console.log("code without using Carry Forward Method");
let count=0;
for(let i=0;i<s.length;i++)
{
    for(j=i+1;j<s.length;j++)
    {
        if(s[i]=='a' && s[j]=='g')
        {
            count++;
        }
    }
}
console.log("The Count of pair(i,j) where s[i]=a and s[j]=g: ");
console.log(count); // output is 5

console.log("----------------------------------------");

//code with using Carry Forward Method
console.log("code with using Carry Forward Method");
let pcount=0;
let gcount=0;
for(let i=s.length;i>0;i--)
{
   if(s[i]=='g')
   {
    gcount+=1;
    pcount+= gcount;
   }
}
console.log("The Count of pair(i,j) where s[i]=a and s[j]=g: ");
console.log(count); // output is 5