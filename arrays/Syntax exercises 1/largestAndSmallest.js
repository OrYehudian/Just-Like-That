function findMinAndMax(arr){
    const [firstVal] = arr;
    let min = firstVal;
    let max = firstVal;

    for(const num of arr){
        if(num < min) min = num;
        if(num > max) max = num;
    }

    return {smallest: min, largest: max}
}


const list = [3, 5, 2, 1, 50, 0, -13];
console.log(findMinAndMax(list));