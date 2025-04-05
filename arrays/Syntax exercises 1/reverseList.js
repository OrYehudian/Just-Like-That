// separate string into word list

function isReverseWords(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    
    const list = str.split(' ');
    isReverse(list);
    const reversWordStr = list.join(' ');
    return reversWordStr;
}


function isReverse(arr) {
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr;
}

const str = "Or Yehudian";
console.log(isReverseWords(str));