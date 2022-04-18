



// function arrAdder(array) { 
//     sentence = ""
//     arr = [] 
//     for(let k =0; k < array[0].length; k++) {
//         for (let i=0; i < array.length; i++) { 
//             arr=[]    
//             arr.push(array[i][k])
//             sentence = sentence + arr
//             }
//             sentence = sentence + " "
//         }
        
                

//     return sentence.slice(0,-1)
// }



function arrAdder(array) { 
    sentence = ""
    for(let k =0; k < array[0].length; k++) {
        for (let i=0; i < array.length; i++) { 
            sentence += array[i][k]
            }
            sentence += " "
        }
    return sentence.slice(0,-1)
}





console.log(arrAdder([ 
    [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    [ '', 'o', '', '', 'e', '', '', 'l' ],
    [ '', 'c', '', '', 'r', '', '', '' ],
    [ '', 'h', '', '', 'h', '', '', '' ],
    [ '', 'o', '', '', 'o', '', '', '' ],
    [ '', 'n', '', '', 'u', '', '', '' ],
    [ '', 'd', '', '', 's', '', '', '' ],
    [ '', 'r', '', '', 'e', '', '', '' ],
    [ '', 'i', '', '', '', '', '', '' ],
    [ '', 'a', '', '', '', '', '', '' ] ]))