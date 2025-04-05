const { isAnagram } = require('../anagramStrings');

describe("isAnagram tests", () => {
    test("checks if two strings are anagrams for good cases", () => {
        const str1 = 'act';
        const str2 = 'cat';
        const result = check2stringsAnagram(str1, str2);
        expect(result).toBeTruthy();
        })

    
    test("checks if two strings are anagrams for bad cases", () => {
        const str1 = 'dog';
        const str2 = 'cat';
        const result = check2stringsAnagram(str1, str2);
        expect(result).toBeFalsy();
        })
})