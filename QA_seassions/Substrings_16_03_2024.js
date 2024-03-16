/*00100101010101001010001 - fins the substrings that starts with 1 and ends with 1
Example: Input: “00100101”
Output: 3
Explanation: three substrings are “1001”, “100101” and “101”*/

function countSubstrings(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == '1') {
            for (let j = i + 1; j < a.length; j++) {
                if (a[j] == '1') 
                {
                    count++;
                    console.log(a.substring(i,j+1));
                }
            }
        }
    }
    return count;
}

const a = "00100101";
console.log("Number of substrings:", countSubstrings(a));

