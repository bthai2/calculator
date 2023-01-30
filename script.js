const body = document.querySelector('body');
const operators = ['+', '-', '/', 'x'];

// container for the calculator
let container = document.createElement('div');
container.classList.add('container');

// the calculator
let calculator = document.createElement('div');
calculator.classList.add('calculator');

// the calculation string (ex: 1+2)
let calcString = document.createElement('div');
calcString.classList.add('calculation');

// the result string (ex: 3)
let resString = document.createElement('div');
resString.classList.add('result');

// the display container for the strings
let display = document.createElement('div');
display.classList.add('display');

display.appendChild(calcString);
display.appendChild(resString);

// the container for the buttons
let buttons = document.createElement('div');
buttons.classList.add('buttons');

// array allows quick add of all buttons later
let buttonArray = [];

// the internal variables of the calculator
var calculation = '';
var calculationDisplayString = '';
var resultString = '';
var resultDisplayString = '';

var num1, num2;

/**
 * This function updates the display of the calculator. Max width for the 
 * display is 12 characters.
 * 
 * @param {string} str1 the string to add to the calculation string.
 * @param {string} str2 the string to add to the result string.
 */
function updateStrings(str1, str2){
    calculation += str1;
    if(calculation.length > 12){
        calculationDisplayString = calculation.slice(calculation.length-12);
    } else {
        calculationDisplayString = calculation;
    }

    resultString += str2;
    if(resultDisplayString.length > 12){
        resultDisplayString = resultString.slice(resultString.length - 12);
    } else {
        resultDisplayString = resultString;
    }

    let display1 = document.querySelector('.calculation');
    let display2 = document.querySelector('.result');

    display1.textContent = calculationDisplayString;
    display2.textContent = resultDisplayString;
}

/**
 * Function to add a button to the button array with the event 
 * listener already attached.
 * 
 * @param {string} text the text to be displayed on the button.
 * @param {Function} onClickFunction the callback function for the button event listener.
 */
function makeButton(text, onClickFunction){
    let button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClickFunction);
    buttonArray.push(button);
}

/**
 * Function to be called when AC button is clicked.
 * It clears the internal variables of the calculator.
 */
function onAcClicked(){
    //clear strings
    calculation = '';
    // calculationDisplayString = '';
    resultString = '';
    // resultDisplayString = '';
    //update display
    updateStrings('', '');
    //clear variables
    num1 = 0;
    num2 = 0;
}

/**
 * Function to be called when C is clicked.
 * Removes the last character entered or clears
 * the result that was already calculated.
 */
function onCClicked(){
    if(resultString == '') {
        calculation = calculation.slice(0, -1);
    } else {
        resultString = '';
    }
    updateStrings('', ''); // this will update the display
}

/**
 * Function to turn current calculator input into it's
 * percentage form by dividing the number by 100.
 */
function onPercentClicked(){
    if(isNaN(Number(calculation))){ //add decimal functionality later
        alert('Error: must contain numbers only')
    } else {
        let num = Number(calculation);
        resultString = '';
        updateStrings('%', num/100);
    }

}

/**
 * The function that performs the calculation of the
 * input string.
 * 
 * @param {Number} idx the index of the operator in the calculation string
 * @param {string} op the operator in the calculation string
 */
function calculate(idx, op){
    // console.log(calculation + ' ' + idx + ' ' + op);
    num1 = Number(calculation.slice(0, idx));
    num2 = Number(calculation.slice(idx+1));
    // let result;
    if(op == '+'){
        updateStrings('', num1 + num2);
    } else if(op == '-'){
        updateStrings('', num1 - num2);
    } else if(op == 'x'){
        updateStrings('', num1 * num2);
    } else if(op == '/'){
        updateStrings('', num1 / num2);
    }
    // console.log(num1);
    // console.log(num2);
}

/**
 * Function to set up call to calculate() function.
 */
function onEqualClicked(){
    //evaluate single expression
    let arr = operators.filter(operator => calculation.includes(operator));
    let ending = calculation.charAt(calculation.length - 1);
    if(arr.length == 1 && !operators.includes(ending)){
        let idx = findOperator(calculation);
        calculate(idx, arr[0]);
    } else if(arr.length != 0) {
        alert('Calculator can currently handle single operations only');
    }
}

/**
 * Function to find the operator within the input string and return its'
 * index.
 * 
 * @param {string} str the operator to find in the input string
 * @returns the index of the given operator or '' if it was not found
 */
function findOperator(str){
    let arr = operators
    .map(operator => str.indexOf(operator))
    .filter(element => element >= 0);
    return (arr.length > 0) ? arr[0] : '';
}

// row 1 of buttons
makeButton('AC', onAcClicked);
makeButton('C', onCClicked);
makeButton('%', onPercentClicked);
makeButton('/', () => {updateStrings('/', '');});

// row 2 of buttons
makeButton('7', () => {updateStrings('7', '');});
makeButton('8', () => {updateStrings('8', '');});
makeButton('9', () => {updateStrings('9', '');});
makeButton('+', () => {updateStrings('+', '');});

// row 3 of buttons
makeButton('4', () => {updateStrings('4', '');});
makeButton('5', () => {updateStrings('5', '');});
makeButton('6', () => {updateStrings('6', '');});
makeButton('-', () => {updateStrings('-', '');});

// row 4 of buttons
makeButton('1', () => {updateStrings('1', '');});
makeButton('2', () => {updateStrings('2', '');});
makeButton('3', () => {updateStrings('3', '');});
makeButton('x', () => {updateStrings('x', '');});

// row 5 of buttons
makeButton('0', () => {updateStrings('0', '');});
makeButton('.', () => {updateStrings('.', '');});
makeButton('=', onEqualClicked);

// adds all the buttons in the array to the buttons container
for(let b of buttonArray){
    if(isNaN(Number(b.textContent))) {
        if(b.textContent == 'AC' || b.textContent == 'C'){ //AC or C
            b.classList.add('clear');
        } else if(b.textContent == '=') { // =
            b.classList.add('eq');
        } else if(b.textContent == '/') {
            b.textContent = '';
            b.innerHTML = '&divide;';
            b.classList.add('division');
        } else if(b.textContent == '.'){
            // do nothing  
        } else {//other operators
            b.classList.add('operator');
        }
    }
    buttons.appendChild(b);
}

calculator.appendChild(display);
calculator.appendChild(buttons);
container.appendChild(calculator);
body.appendChild(container);