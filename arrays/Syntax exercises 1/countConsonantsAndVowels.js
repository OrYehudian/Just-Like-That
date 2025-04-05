function countVowelsAndConsonants(str){
    const result = {vowel: 0, consonamts: 0};
    const VOWELS = 'aeiou';
    const ABC = /^[a-z]$/;

    for(const c of str.toLowerCase()) {
        if(VOWELS.includes(c)) result.vowel++;
        else if(ABC.test(c)) result.consonamts++;
    }

    return result;
}
const list = "just like that";
console.log(countVowelsAndConsonants(list));