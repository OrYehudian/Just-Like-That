const { isOnlyDigit } = require ('../onlyDigits');

describe("isOnlyDigit tests", () => {
    test("isOnlyDigit for good cases", () => {
        expect(isOnlyDigit('1234')).toBeTruthy();
        })

    
    test("isOnlyDigit for bad cases", () => {
        expect(isOnlyDigit('12a')).toBe(-1);
        })

        test("isOnlyDigit for empty strings", () => {
            expect(isOnlyDigit('')).toBeTruthy();
            })
})
