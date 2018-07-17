
function reverseString(str){
	
	//Method 1
	//return str.split('').reverse().join('');
	
	//Method 2
	/*let reversed = '';
	for(let character of str){
		reversed = character+reversed;
	}
	return reversed;*/
	
	//Method 3
	return str.split('').reduce((reversed,character) =>{
		return character+reversed;
	},'');
}

console.log(reverseString('Hello'));
