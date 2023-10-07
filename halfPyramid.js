
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

module.exports = halfpayramid;

//====================================== Inverted & Rotated half-pyramid pattern Algorithm End ==================================================//

