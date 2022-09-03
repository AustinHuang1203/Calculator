

// event listerners
/*
const btn = document.getElementById("btn");
btn.addEventListener("click",);
*/
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",cancel);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click",divide);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click",multiply);

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click",delete1);



//Display
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");


//variables
let sum = 0;
let answer = 0;
let calc = "";


//functions

function cancel(){
    display2.innerHTML = "";
    display3.innerHTML = "";
    calc = "";
}

function divide(){
    calc = calc + "/";
    display2.innerHTML += "÷";
}

function multiply(){
    calc = calc + "*"
    display2.innerHTML += "x"
}

function delete1(){
    calc.slice(0,-1);
    display2.innerHTML = display2.innerHTML.slice(0,-1);
}