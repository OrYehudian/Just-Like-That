// solution 1: use in sort (o(nlogn))

function isAnagram(str1, str2) {

    if(!str1.length || !str2.length) {
        
        return false;
    }

    let result = true;

    if(str1.length !== str2.length) {
        result = false;
        return result;
    }

    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            result = false;
            break;
        }
    }
    
    return result;
}

// solution 1: use (o(n))

function isAnagram(str1, str2) {

    if (!str1.length && !str2.length) {
        return true;
    }
    
    if(!str1.length || !str2.length) {
        return false;
    }

    let result = true;
    const histogram1 = {};
    const histogram2 = {};

    for (const char of str1) {
        histogram1[char] = (histogram1[char] || 0) + 1;
    }

    for (const char of str2) {
        histogram2[char] = (histogram2[char] || 0) + 1;
    }

    for (const char in histogram1) {
        if (histogram1[char] !== histogram2[char]) {
            return false;
        }
    }

    return result;
}


const str1 = 'dog';
const str2 = 'cat';
console.log(isAnagram(str1,str2));


module.exports = { isAnagram };
