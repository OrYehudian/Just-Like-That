const { findDuplicateItems, removeDuplicates, removeDuplicatesInPlace } = require('../removeDuplicated');

describe('remove duplicated items tests', () => {
    describe("findDuplicateItems tests", () => {
        test.each([
            [ [1, 2, 3, 1, 2, 3], [0,1,2] ],
            [ [1, 1, 2, 2], [0, 2] ],
            [ [1, 2, 3], [] ],
            [ [], [] ],
        ])("find duplicate items from array %s , the dup indexes are: %s", (arr, dup) => {
            expect(findDuplicateItems(arr)).toEqual(dup);
        })
    });
        
    describe("removeDuplicates tests", () => {
        test.each([
            [ [1, 2, 3, 1, 2, 3], [1, 2, 3] ],
            [ [1, 1, 2, 2], [1, 2] ],
            [ [1, 2, 3], [1, 2, 3] ],
            [ [], [] ],
        ])("get same list without duplicates $s return %s", (arr, filteredArr) => {
            const result = removeDuplicates(arr);
            expect(result).not.toBe(filteredArr);
            expect(result).toEqual(filteredArr);
        })
    });
    
    describe("removeDuplicatesInPlace tests", () => {
     test.each([
            [ [1, 2, 3, 1, 2, 3], [1, 2, 3] ],
            [ [1, 1, 2, 2], [1, 2] ],
            [ [1, 2, 3], [1, 2, 3] ],
            [ [], [] ],
        ])("get same list without duplicates %s return %s", (arr, expected) => {
            const result = removeDuplicatesInPlace(arr)
            expect(result).toBe(arr);
            expect(result).toEqual(expected);
        })
    
        test.each([
            [ [1, 2, 3, 1, 2, 3], [1, 2, 3] ],
            [ [1, 1, 2, 2], [1, 2] ],
            // [ [1, 2, 3], [] ],
            // [ [], [] ],
        ])("get same list without return value %s return $s", (arr, expected) => {
            expect(arr).not.toEqual(expected);
            removeDuplicatesInPlace(arr);
            expect(arr).toEqual(expected);
        })
    });
    
});