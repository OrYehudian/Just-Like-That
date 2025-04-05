function sortedBits(arr) {
    const result = [];
    for(const bit of arr) {
        if (bit === 1) {
            result.push(bit);
        }
        else {
            result.unshift(bit)
        }
    }
    return result;
}

function sortedBitsInPlace(arr) {
    const N = arr.length;
    let n = 1;
    let i = 0;

    while(n++ <= N) {
        const [ bit ] = arr.splice(i, 1);
        if (bit === 1) {
            arr.push(bit);
        }
        else {
            i++;
            arr.unshift(bit)
        }
    }
    return arr;
}

const array = [0, 1, 1, 0, 0, 1];
console.log(sortedBitsInPlace(array));