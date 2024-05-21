// function isPalindrome(string) {
//   // Start coding here
//   let check = string.toLowerCase()
//   let checkString = check.split('').reverse().join('')

//   return check === checkString  
// }


function isPalindrome(string) {
  return string.trim() == string.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false