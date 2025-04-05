// function stringToNumber(str){
//     let res = 0;
    
//     for(let i = 0; i < str.length; i++){
//         res = res * 10 + (str[i] - '0');
//     }
//     return res;
// }
// const input = '123';
// console.log(stringToNumber(input));

// const str = '123a';
// console.log(stringToNum(str));

// const unique = [1, 2, 4, 2, 1, 6, 3, 4, 5]
//     .filter((item, pos, arr) => {
//         return arr.indexOf(item) === pos;
//     })
//     .sort((a, b) => a - b);

// console.log(unique);

// 500. Keyboard Row
// var findWords = function(words) {
//     const row1 = "qwertyuiop"
//     const row2 = "asdfghjkl"
//     const row3 = "zxcvbnm"
//     let result = [];

//     for(let i = 0; i < words.length; i++) {
//         const word = words[i].toLowerCase();
//         if(word.split('').every(char => row1.includes(char)) ||
//            word.split('').every(char => row2.includes(char)) ||
//            word.split('').every(char => row3.includes(char))) {
//             result.push(words[i])
//         }
//     }
//     return result;
// };

// const list = ["Hello","Alaska","Dad","Peace"];
// console.log(findWords(list));

