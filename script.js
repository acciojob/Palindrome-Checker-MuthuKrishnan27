// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	str = str.trim();
	let st = 0;
	let ed = str.length-1;
	while(st<ed){
		if(str.charAt(st)!==str.charAt(ed)){
			return false;
		}
		st++;
		ed--;
	}
	return true;
}
module.exports = palindrome
