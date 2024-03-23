// You are given an integer array A of size N.

// You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.

// Find and return the maximum possible sum of the B elements that were removed after the B operations.

// NOTE: Suppose B = 3, and array A contains 10 elements, then you can:

// Remove 3 elements from front and 0 elements from the back, OR
// Remove 2 elements from front and 1 element from the back, OR
// Remove 1 element from front and 2 elements from the back, OR
// Remove 0 elements from front and 3 elements from the back.


function pickFromBothsides(arr, N, B) 
{
    let sum = 0;

    // Calculate the sum of the first B elements
    for (let i = 0; i < B; i++) 
    {
        sum += arr[i];
    }

    // Initialize the answer with the sum of the first B elements
    let ans = sum;

    // Traverse the array from the right end
    let j = N - 1;
    for (let k = B - 1; k >= 0; k--) 
    {
        // Update sum by adding the element at j and subtracting the element at k
        sum = sum + arr[j] - arr[k];
        // Update ans if the current sum is greater
        if (ans < sum) {
            ans = sum;
        }
        j--;
    }

    return ans;
}

let a= [5, -2, 3, 1, 2];
let N = a.length;
let B = 3;

let b = [ 2, 3, -1, 4, 2, 1 ]
let M=b.length;
let C=4;
console.log(pickFromBothsides(a, N, B));
console.log(pickFromBothsides(b,M,C));
