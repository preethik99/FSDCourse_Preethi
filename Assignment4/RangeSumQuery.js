
/*You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).*/

function subarraySum(A, B) {
    let result = [];

    for (let i = 0; i < B.length; i++) {
        let L = B[i][0];
        let R = B[i][1];
        let sum = 0;
        for (let j = L; j <= R; j++) {
            sum += A[j];
        }
        result.push(sum);
    }
    return result;
}


let A = [1, 2, 3, 4, 5];
let B = [[0, 3], [1, 2]];
console.log(subarraySum(A, B)); // Output: [10, 5]

let C = [2, 2, 2];
let D = [[0, 0], [1, 2]];
console.log(subarraySum(C,D)); // Output is [2, 4]
