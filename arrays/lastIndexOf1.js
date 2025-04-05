// question 1: Last index of one


function lastIndexOf1(str){
    let result = -1;
    // 1: for on str from last to first
    for(let i = str.length -1; i >= 0; i--){
        // 1.1 check if the current chat is 1
        if(str[i] === '1'){
            //then return the current index
            result = i;
            break;
        }
    }
    return result;
}

// {
//     const bitStr = '00001';
//     const result = 4;
//     console.log(`S=${bitStr},  result=${result}`, 'output: ', lastIndexOf1(bitStr));
// }

// {
//     const bitStr = '0';
//     const result = -1;
//     console.log(`S=${bitStr},  result=${result}`, 'output: ', lastIndexOf1(bitStr));
// }

module.exports.lastIndexOf1 = lastIndexOf1;
