function isRemoveDuplicated(arr) {
    let index = 1;
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i + 1]) {
            arr[index++] = arr[i + 1];
        }
    }
    
    return {uniqeArr: arr.slice(0, index), count: index};
}

const list = [1, 1, 2];
console.log(isRemoveDuplicated(list).uniqeArr);