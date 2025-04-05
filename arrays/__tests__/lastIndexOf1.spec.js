const { lastIndexOf1 } = require('../lastIndexOf1');

test("lastIndexOf1 check good case",() => {
    const bitStr = '00001';
    const result = lastIndexOf1(bitStr)
    expect (result).toBe(4);
})

test("lastIndexOf1 - no ones", () => {
    const bitStr = '00000';
    const result = lastIndexOf1(bitStr);
    expect(result).toBe(-1); // אין אף ספרה '1', מחזיר -1
});