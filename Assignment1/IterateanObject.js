// In JavaScript we iterate over an object based on the key value pair
let employee = {
    name: 'abc',
    age: 25,
    city: 'Bengaluru'
};

for (let key in employee) {
    console.log(key + ': ' + employee[key]);
}