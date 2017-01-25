


//function countCode(string){
//    var codeCounter = 0;
//    for(var i = 0; i < string.length; i++){
//        if (string[i] === "c") {
//            if (string[i + 1] === "o") {
//                if (string[i + 3] === "e"){
//                    codeCounter += 1;
//                }
//            }
//        }
//    }
//    return codeCounter;
//}
//
//console.log(countCode("xxxcodexxx"));

function countCode(string){
    var codeCounter = 0;
    for(var i = 0; i < string.length; i++){
        if (string[i] === "c" && string[i + 1] === "o" && string[i + 3] === "e") {
        codeCounter += 1;
        }
    }
    return codeCounter;
}

console.log(countCode("xxxcodexxx"));