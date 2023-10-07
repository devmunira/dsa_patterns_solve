// Time Complexity O(m+n)
function reactanglePrint(cols,rows){
   for (let i = 1; i <= rows; i++) {
       let col = '';
       for (let j = 1; j <= cols; j++) {
           if(i == 1 || i == rows || j == cols || j == 1){
                col += '*'
           }else{
                col += ' '
           }
        }
        console.log(col)
   }
}


// Time Complexity O(n)
function OofNreactanglePattern(cols, rows) {
    let firstLastRows = '*'.repeat(cols)
    for (let i = 0; i <= rows; i++) {
        if(i == 0 || i == rows) console.log(firstLastRows)
        else console.log('*' + ' '.repeat(cols - 2) + '*')
    }
}

OofNreactanglePattern(4,3)
reactanglePrint(4,3)


// ******
// *    *
// *    *
// ******

//====================================== Rechtangle Pattern Algorithm End ==================================================//
