

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

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click",()=>{addnum(7)});

const btn6 = document.getElementById("btn6");
btn6.addEventListener("click",()=>{addnum(8)});

const btn7 = document.getElementById("btn7");
btn7.addEventListener("click",()=>{addnum(9)});

const btn8 = document.getElementById("btn8");
btn8.addEventListener("click",minus);

const btn9 = document.getElementById("btn9");
btn9.addEventListener("click",()=>{addnum(4)});

const btn10 = document.getElementById("btn10");
btn10.addEventListener("click",()=>{addnum(5)});

const btn11 = document.getElementById("btn11");
btn11.addEventListener("click",()=>{addnum(6)});

const btn12 = document.getElementById("btn12");
btn12.addEventListener("click",add);

const btn13 = document.getElementById("btn13");
btn13.addEventListener("click",()=>{addnum(1)});

const btn14 = document.getElementById("btn14");
btn14.addEventListener("click",()=>{addnum(2)});

const btn15 = document.getElementById("btn15");
btn15.addEventListener("click",()=>{addnum(3)});

const btn16 = document.getElementById("btn16");
btn16.addEventListener("click",modulo);

const btn17 = document.getElementById("btn17");
btn17.addEventListener("click",()=>{addnum(0)});

const btn18 = document.getElementById("btn18");
btn18.addEventListener("click",decimal);



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

function addnum(x){
    calc = calc + "x";
    display2.innerHTML += x;
}

function minus(){
    calc = calc + "-";
    display2.innerHTML += "-";
}

function add(){
    calc = calc + "+";
    display2.innerHTML += "+";
}

function modulo(){
    calc = calc + "%";
    display2.innerHTML += "%";
}

function decimal(){
    calc = calc + ".";
    display2.innerHTML += ".";
}