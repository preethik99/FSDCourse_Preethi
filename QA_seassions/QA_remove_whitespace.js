let str=" I am staying in Bangalore "
let trimmedstr=str.trim();
console.log(str);
console.log(trimmedstr);

function removeWhiteSpace(str)
{
    let result='';
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!==' ')
        {
            result+=str[i];
        }
    }
    return result;
}

let result=removeWhiteSpace(str);
console.log("String after removing the white spaces : ",result);
console.log(str.trim().split(' ').join(";"));