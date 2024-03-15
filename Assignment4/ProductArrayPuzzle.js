/*Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator*/

function productArray(A) {
    const n = A.length;
    
    // Initialize arrays to store left and right products
    const leftProduct = [];
    const rightProduct = [];
    
    let leftProd = 1;
    for (let i = 0; i < n; i++) {
        leftProduct[i] = leftProd;
        leftProd *= A[i];
    }
    
    let rightProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        rightProduct[i] = rightProd;
        rightProd *= A[i];
    }
    
    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct[i] * rightProduct[i];
    }
    
    return result;
}

const A = [1, 2, 3, 4, 5];
const resultA = productArray(A);
console.log(resultA); // Output: [120, 60, 40, 30, 24]

const B = [5, 1, 10, 1];
const resultB = productArray(B);
console.log(resultB); // Output: [10, 50, 5, 50]