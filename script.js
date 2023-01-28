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

var currOperator = '';

function updateStrings(str1, str2){
    calculation += str1;
    calculationDisplayString = calculation.slice(calculation.length-12);
    resultString += str2;
    resultDisplayString = resultString.slice(resultString.length - 12);

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
    console.log('AC');
}

function onCClicked(){
    console.log('C');
}

function onPercentClicked(){
    console.log('%');
}

function onEqualClicked(){
    console.log('====');
}

function onOperatorClick(operator){

}

// function findOperator(str){
//     let arr = operators
//     .map(operator => str.indexOf(operator))
//     .filter(element => element >= 0);
//     return arr[0];
// }

function onButtonClick(str) {
    // if string already has operator replace it
    if(operators.includes(str) && calculation.includes(str)){
        //switch the operator with this new one
        calculation.replace(currOperator, str);
        currOperator = str;
        updateStrings('', ''); // to update the short string
                                // if it is too long
    } else {
        updateStrings(str, '');
    }
    // if(isNaN(Number(str)) && str !== '.'){
    //     if(hasOperator(str)){
    //         return;
    //     }
    // }
    // updateStrings(str, '');
    console.log(calculation);
    console.log(resultString);
}

makeButton('AC', onAcClicked);
makeButton('C', onCClicked);
makeButton('%', onPercentClicked);
makeButton('/', () => {onButtonClick('/')});

makeButton('7', () => {onButtonClick(7)});
makeButton('8', () => {onButtonClick(8)});
makeButton('9', () => {onButtonClick(9)});
makeButton('+', () => {onButtonClick('+')});

makeButton('4', () => {onButtonClick(4)});
makeButton('5', () => {onButtonClick(5)});
makeButton('6', () => {onButtonClick(6)});
makeButton('-', () => {onButtonClick('-')});

makeButton('1', () => {onButtonClick(1)});
makeButton('2', () => {onButtonClick(2)});
makeButton('3', () => {onButtonClick(3)});
makeButton('x', () => {onButtonClick('x')});

makeButton('0', () => {onButtonClick(0)});
makeButton('.', () => {onButtonClick('.')});
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