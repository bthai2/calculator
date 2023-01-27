const body = document.querySelector('body');

let container = document.createElement('div');
container.classList.add('container');

let calculator = document.createElement('div');
calculator.classList.add('calculator');

let display = document.createElement('div');
display.classList.add('display');

let buttons = document.createElement('div');
buttons.classList.add('buttons');

let buttonArray = [];

var calculatedString = '';
var fitString = '';

var num1, num2;

function updateStrings(str){
    calculatedString = str;
    fitString = calculatedString.slice(calculatedString.length-12);
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
    if (b.textContent == '/'){
        b.textContent = '';
        b.innerHTML = '&divide;';
        b.style.fontSize = '34px';
        b.addEventListener('click', onDivideClicked);
    } else if(b.textContent == '='){
        b.classList.add('eq');
    }
    buttons.appendChild(b);
}

calculator.appendChild(display);
calculator.appendChild(buttons);
container.appendChild(calculator);
body.appendChild(container);