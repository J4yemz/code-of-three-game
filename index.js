
let randomNum1 = getrandomNumber();
let randomNum2 = getrandomNumber();
let randomNum3 = getrandomNumber();
const resultText = "New random numbers:"
//let threeRandomNum = getrandomNumber();
const checkNum3 = "Wow! 3 numbers have the same value!";
const checkNum2 = "Yehey! 2 numbers have the same value!";
const checkNum1 = "There are no numbers that have the same value";


function getrandomNumber(){
  return Math.ceil(Math.random() * 3);
}

function rollDice(){
  
  document.getElementById("num1").innerHTML = randomNum1;
  document.getElementById("num2").innerHTML = randomNum2;
  document.getElementById("num3").innerHTML = randomNum3;

  if (randomNum1 == randomNum2 && randomNum2 == randomNum3 && randomNum1 == randomNum3) {
    document.getElementById("result").innerHTML = checkNum3; 
  } else if (randomNum1 == randomNum2 || randomNum2 == randomNum3 || randomNum1 == randomNum3){
    document.getElementById("result").innerHTML = checkNum2; 
  } else{
    document.getElementById("result").innerHTML = checkNum1; 
  }
}

function resetDice(){
  randomNum1 = getrandomNumber();
  randomNum2 = getrandomNumber();
  randomNum3 = getrandomNumber();
  document.getElementById("num1").innerHTML = "num1";
  document.getElementById("num2").innerHTML = "num2";
  document.getElementById("num3").innerHTML = "num3";
  document.getElementById("result").innerHTML = resultText;
}
