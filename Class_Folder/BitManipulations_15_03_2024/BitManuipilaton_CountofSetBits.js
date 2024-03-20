//Count the number of set bits in a number

function countSetBits(number) {
    let count = 0;
    while (number > 0) 
    {
        if (number & 1) 
        { 
            count++;
        }
        number >>= 1; 
    }
    return count;
}


let number = 20; // Binary representation: 10100
console.log("Number of set bits in", number, "is", countSetBits(number));

// Convert number to binary string
console.log("-------------------------------------------------------------------");
//The radix parameter in JavaScript is an optional parameter used in numeric conversions and string representations of numbers.
//It specifies the base of the numeral system to be used when converting a number to a string or parsing a string into a number.
// Common radix values include 2 for binary, 8 for octal, 10 for decimal, and 16 for hexadecimal.
function printBitValue(number) {
    return number.toString(2); 
}

let num = 20; // Binary representation: 10100
console.log("Bit value of", number, "is", printBitValue(num));

