
/**
 * INVERTED & ROTATED HALF-PYRAMID pattern
 * @params {length} Length of Payramid base
 */

//    *
//   **
//  ***
// ****

// Time Complexity Big O(n)
function halfpayramid(length) {
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

// Time Complexity Big O(n^2)
function halfPayramidWithNumber(length) {
    for (let i = 0; i <= length; i++) {
        let num = '';
        for (let j = 1; j <= length - i; j++) {num += j}
        console.log(num)  
    }
}

module.exports = {halfpayramid, halfPayramidWithNumber};

//====================================== Inverted & Rotated half-pyramid pattern Algorithm End ==================================================//

