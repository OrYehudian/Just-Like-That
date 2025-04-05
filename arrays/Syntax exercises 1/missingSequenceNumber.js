// use sort and compare
function findMissingInArray(arr){
    let newArray = arr.slice(0).sort((a, b) => a - b);
    
    if (newArray[0] !== 1) {
        return 1;
    }

    for(let i = 0; i < newArray.length - 1; i++){
        if (newArray[i] + 1 !== newArray[i + 1]){
            return newArray[i] + 1;
        }
    }
    return newArray[newArray.length - 1] + 1;}

// use sum formula
function findMissingInArray2(arr){
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

// use in Array of counters
function findMissingInArray3(arr){
    let missingNum ;
    let seenNumbers = new Array(arr.length + 1).fill(0);

    for(let i = 0; i < arr.length; i++){
        seenNumbers[arr[i] - 1] = 1;
    }
    missingNum = seenNumbers.findIndex(val => val === 0) + 1;
    return missingNum;
}

const list = [1, 2, 3, 5];
console.log(findMissingInArray3(list));