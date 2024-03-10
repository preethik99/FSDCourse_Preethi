function linearSearch(text, target) {
    for (let i = 0; i <= text.length - target.length; i++) {
        let found = true;
        for (let j = 0; j < target.length; j++) {
            if (text[i + j] !== target[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i; // Return the index of the first occurrence of the target substring
        }
    }
    return -1; // Return -1 if the target substring is not found
}

// Example usage:
let text = "hello world";
let target = "abc";
console.log(linearSearch(text, target)); // Output: 6 (index of the substring "world" in "hello world")