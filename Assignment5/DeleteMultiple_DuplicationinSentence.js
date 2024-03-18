let sentence = "I am from Bengaluru . I have my institution in Bengaluru";
let words = sentence.split(' ');
let filteredWords = [];

for (let word of words) 
{
    let isDuplicate = false;

    for (let filteredWord of filteredWords) 
    {
        if (filteredWord == word)
        {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate == false) 
    {
        filteredWords.push(word);
    }
}

let resultSentence = filteredWords.join(" ");
console.log(resultSentence);
