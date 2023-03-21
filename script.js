// complete the given function

function palindrome(str){
let checkStr=str;
	let strArr=str.split("").reverse().join("")
	
	return checkStr==strArr
}
module.exports = palindrome
