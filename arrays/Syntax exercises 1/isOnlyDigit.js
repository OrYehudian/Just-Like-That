function isAllDigit(str){
   for(const c of str){
       if (!/[0-9]/.test(c)) return false;
   }
   return true;
}

const list = '1234a';
console.log(isAllDigit(list));

