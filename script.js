// complete the given function

function palindrome(str){
let checkStr=str
	let strArr=str.split("").reverse().join("")
	return str==strArr
}
module.exports = palindrome
