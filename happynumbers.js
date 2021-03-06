function splitNumber(number){
  let splittedNumber = number.toString().split('');
  return splittedNumber;
}

function squareTheSplits(splittedNumber){
  let resultArr = [];
  for(let i = 0; i < splittedNumber.length; i++){
    resultArr.push(splittedNumber[i] ** 2);
  }
  console.log(resultArr);
  return resultArr;
}

function addSquaredNumbers(squaredArray){
  let sum = 0;
  for(let i = 0; i < squaredArray.length; i++){
    sum += squaredArray[i];
    console.log(sum);
  }
  return sum;
}

function checkIfNumberIsHappy(sum){
  if(sum === 1) {
    return true;
  }
  return false;
}

// main function
function startHappyNumbers(number, runningTotal){
  let splittedNumber = splitNumber(number);
  let squaredArray = squareTheSplits(splittedNumber);
  let sum = addSquaredNumbers(squaredArray);
  let total = checkIfNumberIsHappy(sum);

  if(total === true){
    console.log("Your number is happy!")
  }
  else if(total === false && runningTotal.includes(sum) === false ){
    runningTotal.push(sum);
    startHappyNumbers(sum, runningTotal);
  }
  else{
    console.log("Your number will never be happy....");
  }
}

startHappyNumbers(19, []);
startHappyNumbers(4, []);