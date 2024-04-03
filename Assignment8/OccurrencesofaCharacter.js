//Find the number of occurrences of a character in a String?

function countOccurrences(str, char) {
    let count = 0;
    str=str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

let str = "I live in Bengaluru";
let char = "i";
console.log("Number of occurrences of", char ,"in", str, " : ", countOccurrences(str, char)); 
