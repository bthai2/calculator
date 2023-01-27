const body = document.querySelector('body');

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
var displayString = '';
var resultString = '';

var num1, num2;

function updateCalcStrings(str){
    calculation = str;
    displayString = calculation.slice(calculation.length-12);
}

function updateResult(){
    resultString
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

function onDivideClicked(){
    console.log('divide');
}

function onAddClicked(){
    console.log('Add');
}

function onSubtractClicked(){
    console.log('Subtract');
}

function onMultiplyClicked(){
    console.log('X');
}

function onDecimalClicked(){
    console.log('.');
}

function onEqualClicked(){
    console.log('====');
}

function onNumberClicked(num){
    console.log(num);
}

makeButton('AC', onAcClicked);
makeButton('C', onCClicked);
makeButton('%', onPercentClicked);
makeButton('/', onDivideClicked);

makeButton('7', () => {onNumberClicked(7)});
makeButton('8', () => {onNumberClicked(8)});
makeButton('9', () => {onNumberClicked(9)});
makeButton('+', onAddClicked);

makeButton('4', () => {onNumberClicked(4)});
makeButton('5', () => {onNumberClicked(5)});
makeButton('6', () => {onNumberClicked(6)});
makeButton('-', onSubtractClicked);

makeButton('1', () => {onNumberClicked(1)});
makeButton('2', () => {onNumberClicked(2)});
makeButton('3', () => {onNumberClicked(3)});
makeButton('x', onMultiplyClicked);

makeButton('0', () => {onNumberClicked(0)});
makeButton('.', onDecimalClicked);
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