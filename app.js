let numBtn = document.querySelectorAll("[data]");
let opBtn = document.querySelectorAll("[operator]");
let dScreen = document.getElementById("screen");
const clearBtn = document.getElementById("data-clear");

let fArg = 0;
let operator = '';
let foperator = '';
let loperator = '';
let lArg = 0;
let counter = 0;
let oCounter = 0;

numBtn.forEach( (button) =>
    button.addEventListener('click', () => {
    display(button.textContent);
    if (counter === 0){
        fArg = dScreen.textContent;
    } else {
        lArg = dScreen.textContent;
    };
})
);

opBtn.forEach( (button) =>
    button.addEventListener('click', () => {
    operator = button.textContent;
    if (oCounter === 0){
        foperator = button.textContent;
        oCounter += 1;
    } else if (oCounter != 0 && operator != '='){
        foperator = operator;
    }
    counter += 1;
    clearScreen();
    if (operator === '='){
        counter = 0;
        dScreen.textContent = evaluate(fArg, lArg, foperator);
    }   
})
);

clearBtn.addEventListener('click', clearScreen, clearAll);

function display(number){
    dScreen.textContent += number;        
}

function clearScreen(){
    dScreen.textContent = '';
}

function clearAll(){
    counter = 0;
    oCounter = 0;
    fArg = 0 ;
    lArg = 0;
    foperator = 0;
    loperator = 0;
}

function evaluate(num1, num2, operator){
    if (operator === '+'){
        return parseInt(num1) + parseInt(num2);
    } else if (operator === '-'){
        return parseInt (num1) - parseInt(num2);
    } else if (operator === '*'){
        return parseInt (num1) * parseInt(num2);
    } else if (operator === '/'){
        return parseInt (num1) / parseInt(num2);
    } else {
        return "NAMASTE";
    }
}

