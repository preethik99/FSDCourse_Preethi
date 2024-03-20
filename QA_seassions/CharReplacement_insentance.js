function stringreplace(obj)
{
    for (let key in obj) 
    {
            obj[key] = obj[key].replace(/have/g, "had");  
    }
    return obj;
}

let a={
    "string1":"I have a pencil",
    "string2":"I have a pen",
    "string3":"I have a book",
    "string4":"I have a eraser"
};

let output=stringreplace(a);
console.log(output);
