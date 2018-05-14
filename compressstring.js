//create 
// for loop input

// in loop, need to check letter im on, compare it to next letter in list

// counter var

// reset counter if next letter is different

function compressString(){
	let count = 1;
	let result = "";

	let userInput = prompt("Please enter a string to compress");
		for (i = 0; i < userInput.length; i++){
			if(userInput[i] === userInput[i + 1]){
				count++;
			}
			else{
				result += count + userInput[i];
				count = 1;
			}
			console.log(result);
		}				//console.log("")
}

compressString();