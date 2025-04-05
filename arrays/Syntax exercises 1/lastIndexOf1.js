function lastIndexOf1(str){
    let result = -1;
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] === '1') {
            result = i;
            break;
        }
    }

    return result;
}

const list = '00001';
console.log(lastIndexOf1(list));