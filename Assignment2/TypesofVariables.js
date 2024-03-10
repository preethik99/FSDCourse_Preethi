let varNum= 28;
let varString ="OPQ Tech";
let varBool=true;
let varFloat=3.25;
let varArr=[52,16,45];
let varObject= {Traning:"OPQ Tech",
Batch:"Feb",
Number_of_Students : 20};

console.log("The varNum has value :"+ varNum +" : is of type "+typeof varNum);
console.log("The varString has value :"+ varString +" : is of type "+ typeof varString);
console.log("The varBool has value :"+varBool+" : is of type "+typeof varBool);
console.log("The varFloat has value :"+varFloat+" : is of type "+typeof varFloat);
console.log("The varArr is of type "+typeof varArr+ "; and below are the Values present in array :" + varArr);
for(let i=0;i<varArr.length; i++)
{
console.log("The index :"+i+" has value :"+varArr[i]);
}
console.log("The vaObject is of type "+typeof varObject+"; and below are the key values present in Object");
for (let key in varObject)
{
    console.log(key + ":" + varObject[key]);
}