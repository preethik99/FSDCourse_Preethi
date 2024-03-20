//Given a number a and i check if the ith bit of a is set or not

function isBitSet(number, i) {

    let shiftedNumber = number >> i;
    if (shiftedNumber & 1) {
        return true; 
    } else {
        return false; 
    }
}

let N = 20;
let i = 4;
console.log("Is the", i, "-th bit of", N, "set:", isBitSet(N, i)); // output is true 
