//How do you calculate the number of vowels and consonants in a String?

function countVowelsAndConsonants(str) 
{
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;
    
    // Iterate through each character of the string
    for (let char of str) 
    {
        // Check if the character is an alphabet using the isAlphabet function
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) 
        {
            // Check if the character is a vowel
            if (vowels.includes(char)) 
            {
                vowelCount++;
            } else 
            {
                consonantCount++;
            }
        }
    }
    
    // Return an object containing the counts
    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

const inputString = "Bengaluru";
const counts = countVowelsAndConsonants(inputString);
console.log("Number of vowels:", counts.vowels);
console.log("Number of consonants:", counts.consonants);
