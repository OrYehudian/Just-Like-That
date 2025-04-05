    // solution closest zero 

//module.exports.findAll = function(arr) {
//     const sortedArray = arr.sort((a, b) => a - b);
//     let minSum = sortedArray[0] + sortedArray[1];

//     for(let i = 1; i < sortedArray.length - 1; i++) {
//         const currSum = sortedArray[i] + sortedArray[i + 1];
//         if(Math.abs(currSum) < Math.abs(minSum)) {
//             minSum = currSum;
//         }
//     }

//     return minSum;
//

//const list = [-8, -66, -60];
//console.log(module.exports.findAll(list));


module.exports.findAll2 = function(arr, k) {
    const result = [];

    const sortedArray = arr.sort((a, b) => (a - b));

    for(let i = 0, j = sortedArray.length - 1; i < j; i++, j--) {
        if(sortedArray[i] + sortedArray[j] === k){
            return result = [sortedArray[i] ,sortedArray[j]];
        }
        else if (sortedArray[i] + sortedArray[j] > k) {
            j--;
        }
        else {
            i++;
        }
    }
    return result = [sortedArray[i] ,sortedArray[j]];
 
}