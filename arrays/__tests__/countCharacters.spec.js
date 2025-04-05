const {countOccurrenceCharacters, countVowelsAndConsonantsCharacters} = require ('..//countCharacters')

describe("countOccurrenceCharacters tests", () => {
    test.each([
        ['', {}],
        [`JUST LIKE THAT`, {
            J: 1,
            U: 1,
            S: 1,
            T: 3,
            ' ': 2,
            L: 1, 
            I: 1,
            K: 1,
            E: 1,
            H: 1,
            A: 1,
        }],
    ])("isOnlyDigit return true for '%s'",(str, result) => {
        expect(countOccurrenceCharacters(str)).toEqual(result);
    })
})

describe("countVowelsAndConsonantsCharacters tests", () => {
    test.each([
        ['',  {vowel: 0, consonant: 0, special: 0 }],
        [`JUST LIKE THAT`, { vowel: 4, consonant: 8 }],
    ])("count the vowel and consonant chars for '%s'", (str, result) => {
        expect(countVowelsAndConsonantsCharacters(str)).toEqual(result)
    })
})