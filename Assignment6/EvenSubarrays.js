// Problem Description
// You are given an integer array A.

// Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.

// Return "YES" if it is possible; otherwise, return "NO" (without quotes).


function canDivideIntoSubarrays(A) {
    // Check if the array length is odd, which means we can't divide it into even length subarrays
    if (A.length % 2 !== 0) {
        return "NO";
    }
    
    // Iterate through the array, checking if the first and last elements of each subarray are even
    for (let i = 0; i < A.length; i += 2) {
        if (A[i] % 2 !== 0 || A[i + 1] % 2 !== 0) {
            return "NO";
        }
    }
    
    // If all subarrays have even first and last elements, return "YES"
    return "YES";
}


let A1 = [2, 4, 8, 6];
console.log(canDivideIntoSubarrays(A1)); // Output: YES

let A2 = [2, 4, 8, 7, 6];
console.log(canDivideIntoSubarrays(A2)); // Output: NO

