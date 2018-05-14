// let userInput = getUserInput("Please enter a word to be reversed:");
// let result = reverseAString(userInput);
// console.log('result', result);
// Check If Palindrome
function checkIfPalindrome() {
  let userInput = getUserInput("Please enter a word to check to see if it's a palindrome:");
  let backwardsWord = reverseAString(userInput);
  if(userInput === backwardsWord) {
    console.log(userInput + " is a palindrome!");
    return true;
  }
  else {
    console.log(userInput + " is NOT a palindrome!");
    return false;
  }
}
// checkIfPalindrome();