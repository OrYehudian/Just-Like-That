module.exports = { checkParentheses };
   
function checkParentheses(str) {
    
    if(!str){
        return true;
    }

    if(str.length % 2 == 1) { // count = odd
        return false;
    }

    let counter = 0;

    const parenthesesTypesOpen = '(';
    const parenthesesTypesClose = ')';

    for(const char of str) {
        if(char == parenthesesTypesOpen) {
            counter++;
        }
        else {
            counter--;
        }

        if (counter < 0) return false; 
    }

    if (counter === 0) return true;

}

const str = '(()(()))()';
console.log(checkParentheses(str));