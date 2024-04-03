let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Swap the numbers without using a third variable
a = a + b; // Add both numbers and store the result in 'a'
b = a - b; // Subtract 'b' from the new value of 'a' and store the result in 'b'
a = a - b; // Subtract the new value of 'b' from the new value of 'a' and store the result in 'a'

console.log("\nAfter swapping:");
console.log("a =", a);
console.log("b =", b);
