

// event listerners
/*
const btn = document.getElementById("btn");
btn1.addEventListener("click",)
*/
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",cancel);

//Get elements
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");


//functions

function cancel(){
    display2.innerHTML = "";
    display3.innerHTML = "";
}