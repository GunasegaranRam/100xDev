/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
/*
using replace to remove non-alphabetic char from str then use split to str into arr, then rev and join And checks if str and revStr equal
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z]/g,'');
    return str === str.split('').reverse().join('');
}
*/
function isPalindrome(str) {
    str = str.replace(/[^a-zA-z]/g,'').toLowerCase();//using replace to remove non-alphabetic char from str
    for(let st = 0, en = str.length -1; st < en; st++, en--)
    {
       if(str[st]==str[en]);
       else
         return false;
    }
    return true
}


module.exports = isPalindrome;
