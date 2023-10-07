
/**
 * INVERTED & ROTATED HALF-PYRAMID pattern
 * @params {length} Length of Payramid base
 */

//    *
//   **
//  ***
// ****

// Time Complexity Big O(n)
function halfPyramid(length) {
    console.log('============Invert & Roated Half-Pyramid Pattern print==============');
    for (let i = 1; i <= length; i++) {
        console.log(' '.repeat(length - i) + '*'.repeat(i))
    }
}


/**
 * INVERTED HALF-PYRAMID with Number pattern
 * @params {length} Length of Payramid base
 */

//1234
//123
//12
//1

// Time Complexity Big O(n)
function halfPayramidWithNumber(length){
    let cur  = 1;
    let line = Array.from({length : length} , (v,i) => i + 1).join('')
    console.log('============Invert With Number Half-Pyramid Pattern print==============');
    for (let i = length - 1; i >= 1; i--) {
        console.log(line)
        line = line.slice(0 , -1)
    }
}

module.exports = {halfPyramid, halfPayramidWithNumber};

//====================================== Inverted & Rotated half-pyramid pattern Algorithm End ==================================================//

