function findNonRepeatedFirsrt(str) {
    
    const freq = {};

    for(const char of str) {
        if(!freq[char]) {
            freq[char] = 0;
        }
        freq[char]++;
    }
    
    for(const char of str) {
        if(freq[char] === 1) {
            return char;
        }
    }

    return '$';
}

const list = 'geeksforgeeks';
console.log(findNonRepeatedFirsrt(list));