function checkIsCorrectParentheses(str) {
    // 1. If an opening parenthesis: push in onto the stack
    // 2. If a close parenthesis:
    //    If stack is empty -> return false
    //    Else, pop from stack and check if it matches the opening parenthesis
    // 3. At the end, if stack is not empty -> return false

    const stack = [];
    const pairs = {  '(' : ')',
                     '{' : '}',
                     '[' : ']'
    }; 

    if (str.length % 2 !== 0) return false;

    for (const char of str) {
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            if (stack.length == 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(checkIsCorrectParentheses("[{()}]")); // true
console.log(checkIsCorrectParentheses("[()()]{}")); // true
console.log(checkIsCorrectParentheses("([]")); // false
console.log(checkIsCorrectParentheses("([{]})")); // false
