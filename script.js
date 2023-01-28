var operator = prompt("Type your operator (1)+ (2)- (3)* (4)/");
var firstNumber = parseInt(prompt("Enter your First Number"));
var secondNumber = parseInt(prompt("Enter your Second Number"));
const textParagraph = document.getElementById("text");


switch(operator){
    case "1": {
        textParagraph.innerHTML = (`${firstNumber} + ${secondNumber} = ${SumOfNumbers(firstNumber, secondNumber)}`);
        break;
    }
    case "2": {
        textParagraph.innerHTML = (`${firstNumber} - ${secondNumber} = ${DifferenceOfNumbers(firstNumber, secondNumber)}`);
        break;
    }
    case "3": {
        textParagraph.innerHTML = (`${firstNumber} * ${secondNumber} = ${ProductOfNumbers(firstNumber, secondNumber)}`);
        break;
    }
    case "4": {
        textParagraph.innerHTML = (`${firstNumber} / ${secondNumber} = ${QuotientOfNumbers(firstNumber, secondNumber)} remainder ${GetRemainderOfNumbers(firstNumber, secondNumber)}`);
        break;
    }
}

function SumOfNumbers(firstNumber, secondNumber){
   return firstNumber + secondNumber;   
}

function DifferenceOfNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function ProductOfNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function QuotientOfNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}
function GetRemainderOfNumbers(firstNumber, secondNumber){
    return firstNumber % secondNumber;
}


