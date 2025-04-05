const { findNonRepatFirstChar2 } = require('../findNonRepeated');

test("find the dup chars", () => {
    const str = 'aabbccc';
    const result = findNonRepatFirstChar(str);
    expect(result).toEqual(["a","b","c"]);
});

test("find the first non repeated char", () => {
    const str = 'atabbcccd';
    const result = findNonRepatFirstChar2(str);
    expect(result).toBe("t");
});

test("find the first non repeated char for empty result" , () => {
    const str = 'aabbccc';
    const result = findNonRepatFirstChar2(str);
    expect(result).toBe("");
});
