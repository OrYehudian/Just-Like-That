const { checkParentheses } = require('../correctParentheses');

describe("correctParentheses tests", () => {
    test.each([
        ['(()(()))()'],
        ['()',
        ['()()'],
        [''], 
    ]])("isPalindrome return true for'%s'", (str) => {
        expect(correctParentheses(str)).toBeTruthty()
    })

    test.each([
        ['((())()()'],
        [')('],
    ])("is palindrom return false for '%s'", (str) => {
        expect(correctParentheses(str)).toBeFalsy()
    
    })
})