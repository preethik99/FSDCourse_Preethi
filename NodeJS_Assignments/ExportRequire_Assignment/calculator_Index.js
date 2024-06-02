const math=require("./math_calculator.js");
const math1=require("./Math.js");

const a = 6;
const b = 2;
const c = 0;
console.log("Addition of two numbers is : " ,math.add(a,b));
console.log("Substraction of two numbers is : " ,math.substract(a,b));
console.log("Multiplication of two numbers is : " ,math.multipliy(a,b));
console.log("Division of two numbers is : " ,math.divison(a,b));
console.log("Divison with 0 is : " ,math.divison(a,c));

console.log("--------------------------------------------------------")
const d = 6;
const e = 2;
console.log("Addition of two numbers is : " ,math1.add(d,e));
//console.log("Substraction of two numbers is : " ,math1.substract(d,e));
// console.log("Multiplication of two numbers is : " ,math1.multiply(d,e));

//------------------Importing JSON Data-------------------------------

console.log("----------------------JSON Values---------------------------");

const data=require("./TestData");
console.log("Name : ", data.Name);
console.log("Course Name : ", data.Course.Name);
console.log("Batch : " , data.Course.Batch);
console.log("Place : ", data.Place);
