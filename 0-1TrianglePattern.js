/**
 * Zero to One Triangle Pattern print
 * @param {Number} length 
 */

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function ZeroToOneTriangle(length) {
    console.log('============Zero to One Triangle Pattern print==============');
    for (let i = 1; i <= length; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += ((i + j) % 2 === 0) ? '1 ' : '0 ';
        }
        console.log(line.trim());
    }
}


module.exports = {
    ZeroToOneTriangle
}