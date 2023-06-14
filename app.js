let numBtn = document.querySelectorAll("[data]");
let opBtn = document.querySelectorAll("[operator]");
let dScreen = document.getElementById("screen");
const clearBtn = document.getElementById("data-clear");

let fArg = 0;
let operator = '';
let lArg = 0;


numBtn.forEach( (button) =>
    button.addEventListener('click', () => {
        display(button.textContent);
        counter = 0;
        if (counter === 0 ){
            fArg = button.textContent;
            console.log(fArg);
            counter +=1;
        } else {
        lArg = button.textContent;
        console.log(lArg);
        }
})
);


opBtn.forEach( (button) =>
    button.addEventListener('click', () => {
    operator = button.textContent;
    clear();
    console.log(operator);
})
);

clearBtn.addEventListener('click', clear);

function display(number){
    dScreen.textContent += number;        
}

function clear(){
    dScreen.textContent = '';
}

function evaluate (num1, num2, op){
    if (op === '+'){
        return num1 + num2;
    }
}

