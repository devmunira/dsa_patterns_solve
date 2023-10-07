/**
 * Butterfly pattern
 * @param {Number} length 
*/


// Time Complexity Big O(n)
function butterflyAlgorithm(length) {
    let line = "*".repeat(length)
    let divisionArea = Math.floor((length - 2) / 2)

    console.log('============Butterfly Pattern print==============');


    for (let i = 1; i <= divisionArea; i++) {
        console.log('*'.repeat(i) + ' '.repeat(length - (i + i)) + '*'.repeat(i))
    }

    for (let i = 1; i <= 2; i++) {
        console.log(line)
    }

    for (let i = divisionArea; i >= 1; i--) {
        console.log('*'.repeat(i) + ' '.repeat(length - (i + i)) + '*'.repeat(i))
    }
}



// Ouput

// *                  *
// **                **
// ***              ***
// ****            ****
// *****          *****
// ******        ******
// *******      *******
// ********    ********
// *********  *********
// ********************
// ********************
// *********  *********
// ********    ********
// *******      *******
// ******        ******
// *****          *****
// ****            ****
// ***              ***
// **                **
// *                  *




module.exports = {
    butterflyAlgorithm
}