// לעבור תו תו במחרוזת אם שונה מספרה 0-9 לא מחרוזת 

module.exports.isOnlyDigit = function(str){

    // use in one line
    //return str.split('').every(c => '0123456789'.includes(c));
    
    //use in loop
    
    if(str === ""){
        return 1;
    }

    let result = 1;
    const DIGIT = /[0-9]/;

    for(const c of str){
        if (!DIGIT.test(c)){
            result = -1
            break;
        }
    }
    
    return result;
}


//const { isOnlyDigit } = require("./onlyDigits"); // ייבוא עצמי
const str = "";
console.log(isOnlyDigit(str)); // 1