const { merge2SortedArray }  = require('../merge2SortedArray');

test('merge with the expected length and no extra space', () => {
    const arr1 = [0, 1, 1, 3, 3, 6, 8];
    const arr2 = [1, 4, 6, 7, 7];
    const result = merge2SortedArray(arr1, arr2);
    expect(result).toEqual([0, 1, 1, 1, 3, 3, 4, 6, 6, 7, 7, 8]); 
})

test('merge with empty arrays', () => {
    const arr1 = [];
    const arr2 = [1, 4, 6, 7, 7];
    const result = merge2SortedArray(arr1, arr2);
    expect(result).toEqual([1, 4, 6, 7, 7]); 

    {
        const arr1 = [0, 1, 1, 3, 3, 6, 8];
        const arr2 = [];
        const result = merge2SortedArray(arr1, arr2);
        expect(result).toEqual([0, 1, 1, 3, 3, 6, 8]); 
    }

    {
    const arr1 = [];
    const arr2 = [];
    const result = merge2SortedArray(arr1, arr2);
    expect(result).toEqual([]); 
    }
});