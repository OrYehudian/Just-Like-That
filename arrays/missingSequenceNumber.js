function getMissingNum(array) {
    let missingNum;
    const sortedArray = array.slice(0).sort();

    for(let i = 0; i < sortedArray.length-1; i++){
        if(!(sortedArray[i]+1 === sortedArray[i+1])){
            missingNum = sortedArray[i]+1;
            break;
        }
    }

    return missingNum;

}

function getMissingNum2(array) {
    let missingNum;
    let seenNumebers = new Array(array.length+1).fill(0);
    
    for(let i = 0; i < array.length; i++){
        seenNumebers[array[i] -1] = 1;
    }

    missingNum = seenNumebers.findIndex(val =>val === 0)+1;
    
    return missingNum;
}

const list = [1, 2, 8, 7, 5, 6, 3];
console.log(getMissingNum2(list));