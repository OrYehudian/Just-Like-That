function isAnagramStrings(str1, str2) {
    if (!str1.length || !str2.length) {
        return "invalid input";
    }
    if (str1.length !== str2.length) {
        return false;
    }

    const str1CharsObj = countChars(str1);
    const str2CharsObj = countChars(str2);

    for (const key in str1CharsObj) {
        if (str1CharsObj[key] !== str2CharsObj[key]) {
            return false;
        }
    }

    return true;
}

function countChars(str) {
    const result = {};
    for (const c of str) {
        if (result.hasOwnProperty(c)) result[c]++;
        else result[c] = 1;
    }
    return result;
}

const str1 = "cat";
const str2 = "act";
const anagram = isAnagramStrings(str1, str2);
console.log(anagram);