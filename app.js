let numBtn = document.querySelectorAll("[data]");
let opBtn = document.querySelectorAll("[operator]");
let dScreen = document.getElementById("screen");
const clearBtn = document.getElementById("data-clear");

let fArg = 0;
let operator = '';
let lArg = 0;
let counter = 0;

numBtn.forEach( (button) =>
    button.addEventListener('click', () => {
    display(button.textContent);
    if (counter === 0){
        fArg = dScreen.textContent;
        console.log(`fArg ${fArg}`);
    } else {
        lArg = dScreen.textContent;
        console.log(`lArg ${lArg}`);
    };
})
);

opBtn.forEach( (button) =>
    button.addEventListener('click', () => {
    operator = button.textContent;
    counter += 1;
    clear();
})
);

clearBtn.addEventListener('click', clear);

function display(number){
    dScreen.textContent += number;        
}

function clear(){
    dScreen.textContent = '';
    fArg = 0;
}
