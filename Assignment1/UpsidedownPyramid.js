let n = 5;

for (let i = n-1; i >=0; i--) {
    let row = '';
        for (let j = 0; j < n - i - 1; j++) {
        row += ' ';
    }
    
    for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
    }
    console.log(row);
}