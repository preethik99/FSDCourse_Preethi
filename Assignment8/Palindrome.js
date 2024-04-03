//Palindrome
//A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward


function isPalindrome(input)
{
    
    input = String(input);
    let start = 0;
    let end = input.length - 1;

    // Iterate until the pointers meet in the middle
    while (start < end) 
    {
        // If characters at the current pointers are not equal, return false
        if (input[start] !== input[end]) 
        {
            return false;
        }
        // Move the pointers towards the center
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("able was I ere I saw elba"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
console.log(isPalindrome(12321));    // Output: true
console.log(isPalindrome(12345));    // Output: false
