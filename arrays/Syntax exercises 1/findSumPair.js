function findSumPairNotRecommended (numbers, K) {
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            const firstNumbers = numbers[i];
            const secondNumbers = numbers[j];
            if(firstNumbers + secondNumbers === K) {
                return [firstNumbers, secondNumbers];
            }

        }
    }
    return [];
}

function findSumPairWithSort (numbers, K) {
    let sortedArray = numbers.slice().sort((a, b) => a - b);

    let i = 0;
    let j = sortedArray.length - 1;
    let pairs = []

    while(i < j) {
        const firstNumber = sortedArray[i];
        const secondNumber = sortedArray[j];
        if(firstNumber + secondNumber > K){
            j--;
        }
        else if (firstNumber + secondNumber < K) {
            i++;
        }
        else {
            return [firstNumber, secondNumber];
        }
    }
    return [];
}


const list = [2, 3, 3, 4, 6, 1, 8];
const n = 6;
const result = findSumPairWithSort(list, n)
console.log(result)

