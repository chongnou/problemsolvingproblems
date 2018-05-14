function displayPrimeNumbersInRange(minimum, maximum) {
  if(minimum % 2 === 0) {
    minimum++;
  }
  for(let i = minimum; i <= maximum; i += 2){ // counting from 'min' to 'max'
    let hasPrimeness = testForNumberPrimeness(i);
    if(hasPrimeness) {
      console.log(i);
    }
  }
}
function testForNumberPrimeness(currentNumber) {
  let isPrime = true;
  for(let i = 2; i < currentNumber; i++){ // checking to see if 'currentNumber' is div by 'j' (prove prime/not)
    if(currentNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
displayPrimeNumbersInRange(1, 100);