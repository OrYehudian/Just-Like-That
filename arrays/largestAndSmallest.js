function getMaxAndMin(numbers){
    const[firstvalue] = numbers;
    let min = firstvalue;
    let max = firstvalue;

    for(const num of numbers){
        if(num < min) min = num;
        if(max < num) max = num;
    }
    return {smallest: min, largest: max};
}

module.exports = { getMaxAndMin  };

//const list = [3, 5, 2, 1, 50, 0, -13 ,-100];
//console.log(getMaxAndMin(list));