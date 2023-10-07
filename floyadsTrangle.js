/**
 * FLOYD'S Triangle pattern
 * @param {Number} Length 
*/

// 1
// 12
// 123
// 1234
// 12345
// 123456


// Time Complexity BigO(n^2)
function floydsTrangle(length) {
    for (let i = 1; i <= length; i++) {
        let num = '';
        for (let j = 1; j <= i; j++) {num += j}
        console.log(num)
    }
}


// Time Complexity Reduce to BigO(n)
function floydstrangleON(length) {
    let currentNumber = 1;
    let row = '';

    for (let i = 1; i <= length; i++) {
        row += `${currentNumber} `;
        currentNumber++;
        console.log(row)
    }
}

module.exports = {
    floydsTrangle,
    floydstrangleON
}