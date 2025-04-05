module.exports = {reverseArrayInPlace}

function reverseArrayInPlace(array) {
    if(array == []) {
        return array;
    }
    let i = 0;
    let j = array.length - 1;
    let temp;

    for(i , j; i < j; i++, j--) {
        temp = array[i];
        array[i] = array[j];          
        array[j] = temp;
    }
    
    return array;
}

// function reverseArrayWord2(str) {
//     return str.split('').reverse().join(' ');
// }

const arr = [1, 2, 3];
console.log(reverseArrayInPlace(arr));