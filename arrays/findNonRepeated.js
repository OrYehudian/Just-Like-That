const findNonRepatFirstChar1 = module.exports.findNonRepatFirstChar = function(str) {
    const charsObj = {};
    const resultDups = [];
    
    for(const char of str) {
        if(charsObj.hasOwnProperty(char)) {
            charsObj[char] = true;
        }
        else {
            charsObj[char] = false;
        }
    }
    
    for(const [char, isDup] of Object.entries(charsObj)) {
        if(isDup) resultDups.push(char);
    }
    
    return resultDups;
}
    
// const str = 'aabbccc';
// console.log(findNonRepatFirstChar(str));


const findNonRepatFirstChar2 = module.exports.findNonRepatFirstChar2 = function(str) {
    const charsObj = {};
    const resultDups = [];
    
    for(const index in str) {
        const char = str[index];
        if(charsObj.hasOwnProperty(char)) {
            charsObj[char] = true;
        }
        else {
            charsObj[char] = index;
        }
    }
    
    let minIndex = str.length;

    for(const [char, charIndex] of Object.entries(charsObj)) {
        if('0123456789'.includes(charIndex)) {
            if(+charIndex < minIndex) {
                minIndex = +charIndex;
            }
        }
    }
    return str[minIndex] || "";
}


