// Time Complexity O(m+n)

function reactanglePrint(cols,rows){
   for (let i = 1; i <= rows; i++) {
       let col = '*';
       for (let j = 1; j <= cols; j++) {
           if(i == 1 || i == rows){
                col += '*'
           }else{
            if(j == cols){
                col += '*'
            }else{
                col += ' '
            }
           }
        }
        console.log(col)
   }
}



reactanglePrint(14,7)


// ******
// *    *
// *    *
// ******

// [
//     [1,2,4,3]
//     [1     3]
//     [1,2,4,3]
// ]