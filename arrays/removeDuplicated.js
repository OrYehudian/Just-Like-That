const findDuplicateItems = module.exports.findDuplicateItems = function (arr) {
    // solution O(nlogn)

    // const dup = [];
    // const list = arr.map((n, i) => ({n, i}));
    // const sortedList = list.slice(0).sort((a, b) => a.n - b.n);

    // for(let k = 0; k < sortedList.length - 1; k++) {
    //     if(sortedList[k].n === sortedList[k+1].n) {
    //         dup.push(sortedList[k].i);
    //     }
    // }
    // return dup;

    //solotion O(n)
    let dup = [];
    const obj = {};

    // init object like: { 1: [0, 2], 2: [1, 3], 3: [3, 4]}
    for(let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if(!obj.hasOwnProperty(n)) obj[n] = [];
        obj[n].push(i);
    }

    for(const indexes of Object.values(obj)) {
        indexes.pop();
        dup = [...dup, ...indexes];
    }

    return dup;
}

module.exports.removeDuplicates = function (arr) { // arr = [1,1,2,2]
    const filteredArray = [...arr];                // filteredArray = [1,1,2,2] !== arr
    const dupIndexes = findDuplicateItems(arr);    //                 [0  ,2,  ]

    for(let i = dupIndexes.length - 1; i >= 0; i--) {
        const dupIndex = dupIndexes[i];
        filteredArray.splice(dupIndex, 1);
    }

    return filteredArray;
}

module.exports.removeDuplicatesInPlace = function (arr) {
    const dupIndexes = findDuplicateItems(arr);   

    for(let i = dupIndexes.length - 1; i >= 0; i--) {
        const dupIndex = dupIndexes[i];
        arr.splice(dupIndex, 1);
    }

    return arr;
}


const unique = [1, 2, 4, 2, 1, 6, 3, 4, 5]
    .filter((item, pos, arr) => {
        return arr.indexOf(item) === pos;
});

console.log(unique);