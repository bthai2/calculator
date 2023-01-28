const body = document.querySelector('body');
const operators = ['+', '-', '/', 'x'];

let container = document.createElement('div');
container.classList.add('container');

let calculator = document.createElement('div');
calculator.classList.add('calculator');

let calcString = document.createElement('div');
calcString.classList.add('calculation');

let resString = document.createElement('div');
resString.classList.add('result');

let display = document.createElement('div');
display.classList.add('display');

display.appendChild(calcString);
display.appendChild(resString);

let buttons = document.createElement('div');
buttons.classList.add('buttons');

let buttonArray = [];

var calculation = '';
var calculationDisplayString = '';
var resultString = '';
var resultDisplayString = '';

var num1, num2;

// var currOperator = '';

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

    // if(display1.includes('/')){

    // }

    display1.textContent = calculationDisplayString;
    display2.textContent = resultDisplayString;
}

function makeButton(name, onClickFunction){
    let button = document.createElement('button');
    button.textContent = name;
    button.addEventListener('click', onClickFunction);
    buttonArray.push(button);
}

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

function onCClicked(){
    calculation = calculation.slice(0, -1);
    resultString = resultString.slice(0, -1);
    updateStrings('', ''); // this will update the display
}

function onPercentClicked(){
    console.log('%');
}

function onEqualClicked(){
    console.log('====');
}

// function findOperator(str){
//     let arr = operators
//     .map(operator => str.indexOf(operator))
//     .filter(element => element >= 0);
//     return arr[0];
// }

makeButton('AC', onAcClicked);
makeButton('C', onCClicked);
makeButton('%', onPercentClicked);
makeButton('/', () => {updateStrings('/', '');});

makeButton('7', () => {updateStrings('7', '');});
makeButton('8', () => {updateStrings('8', '');});
makeButton('9', () => {updateStrings('9', '');});
makeButton('+', () => {updateStrings('+', '');});

makeButton('4', () => {updateStrings('4', '');});
makeButton('5', () => {updateStrings('5', '');});
makeButton('6', () => {updateStrings('6', '');});
makeButton('-', () => {updateStrings('-', '');});

makeButton('1', () => {updateStrings('1', '');});
makeButton('2', () => {updateStrings('2', '');});
makeButton('3', () => {updateStrings('3', '');});
makeButton('x', () => {updateStrings('x', '');});

makeButton('0', () => {updateStrings('0', '');});
makeButton('.', () => {updateStrings('+', '');});
makeButton('=', onEqualClicked);

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