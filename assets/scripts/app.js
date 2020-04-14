const defaultValue = 0;
let currentValue = 0;

function getEnteredNumber(){
   const enteredNumber =  parseInt(userInput.value);
   return enteredNumber;
}

function getOperationLiteral(operator, operand1, operand2){
    return `${operand1} ${operator} ${operand2}`
}

function add(){
    const previousValue = currentValue;
    const enteredNumber = getEnteredNumber();
    currentValue = currentValue + enteredNumber ;
    const operationLiteral = getOperationLiteral('+',previousValue,enteredNumber);
    outputResult(currentValue,operationLiteral);
}
function subract(){
    const previousValue = currentValue;
    const enteredNumber = getEnteredNumber();
    currentValue = currentValue - enteredNumber ;
    const operationLiteral = getOperationLiteral('-',previousValue,enteredNumber);
    outputResult(currentValue,operationLiteral);
}
function multiply(){
    const previousValue = currentValue;
    const enteredNumber = getEnteredNumber();
    currentValue = currentValue *  enteredNumber ;
    const operationLiteral = getOperationLiteral('*',previousValue,enteredNumber);
    outputResult(currentValue,operationLiteral);
}
function divide(){
    const previousValue = currentValue;
    const enteredNumber = getEnteredNumber();
    currentValue = currentValue / enteredNumber ;
    const operationLiteral = getOperationLiteral('/',previousValue,enteredNumber);
    outputResult(currentValue,operationLiteral);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);