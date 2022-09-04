

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

const btn19 = document.getElementById("btn19");
btn19.addEventListener("click",eval2);



//Display
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");


//variables
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
    calc = calc.slice(0,-1);
    display2.innerHTML = display2.innerHTML.slice(0,-1);
}

function addnum(x){
    calc = calc + `${x}`;
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

function eval1(){
    try{display3.innerHTML = eval(calc);}
    catch{display3.innerHTML = "Error!";}
}


//evaluate function


function eval2(){
    let marker11 = 0; // first number after operator
    let marker22 = 0;
    let operation1 = "";
    let calcsave = calc;
    for (let x = 0; x<calc.length;x++){
        console.log(calc);
        

        let func1 = () => {for (let i = x+1; i<calc.length;i++){
            if ( isNaN(calc[i]) ){
                let item1 = parseFloat(calc.substring(marker11,x));
                let item2 = parseFloat(calc.substring(x+1,i));
                let item3 = item1 * item2;
                calc = calc.slice(0,marker11) + item3 + calc.slice(i);
                x=0;
                return;
            }
            else if ( i == calc.length-1 ){
                let item1 = parseFloat(calc.substring(marker11,x));
                let item2 = parseFloat(calc.substring(x+1,i+1));
                let item3 = item1 * item2;
                calc = calc.slice(0,marker11) + item3;
                console.log(marker11);
                x=0;
                return;
            }
        }}

        let func2 = () => {for (let i = x+1; i<calc.length;i++){
            if ( isNaN(calc[i]) ){
                let item1 = parseFloat(calc.substring(marker11,x));
                let item2 = parseFloat(calc.substring(x+1,i));
                let item3 = item1 / item2;
                calc = calc.slice(0,marker11) + item3 + calc.slice(i);
                x=0;
                return;
            }
            else if ( i == calc.length-1 ){
                let item1 = parseFloat(calc.substring(marker11,x));
                let item2 = parseFloat(calc.substring(x+1,i+1));
                let item3 = item1 / item2;
                calc = calc.slice(0,marker11) + item3;
                console.log(marker11);
                x=0;
                return;
            }
        }}

        let func3 = () => {for (let i = x+1; i<calc.length;i++){
            if ( isNaN(calc[i]) ){
                let item1 = parseFloat(calc.substring(marker11,x));
                let item2 = parseFloat(calc.substring(x+1,i));
                let item3 = item1 % item2;
                calc = calc.slice(0,marker11) + item3 + calc.slice(i);
                x=0;
                return;
            }
            else if ( i == calc.length-1 ){
                let item1 = parseFloat(calc.substring(marker11,x));
                let item2 = parseFloat(calc.substring(x+1,i+1));
                let item3 = item1 % item2;
                calc = calc.slice(0,marker11) + item3;
                console.log(marker11);
                x=0;
                return;
            }
        }}




        if (calc[x] == "*"){
            func1();
        }

        if (calc[x] == "/"){
            func2();
        }

        if (calc[x] == "%"){
            func3();
        }

        

        if (calc[x] == "+" || calc[x] == "-"){
            marker11 = x+1;
        }

    }




    // addition and subtraction
    let originalmarker = 0;
    let marker1 = 0;
    let marker2 = 0;
    let operation = "";
    let answer = 0;
    let breakit = 0;
    let terminate = 0;
    for (let x = 0; x<calc.length; x++){
        if (terminate == 0){
            if (calc[x] == "+" && marker1 == 0){
                marker1 = x;
                originalmarker = x;
                operation = "+";
                breakit = 1;
                terminate = 1;
            }
            if (calc[x] == "-" && marker1 == 0){
                marker1 = x;
                originalmarker = x;
                operation = "-";
                breakit = 1;
                terminate = 1;
            };
        }
        if (x == (calc.length - 1)){
            if (marker1 == 0){
                answer = answer + parseFloat(calc.slice(0,x+1));
            } 
            if (operation == "+"){
                answer = answer + parseFloat(calc.slice(0,originalmarker)) + parseFloat(calc.slice(marker1+1,x+1));
            }
            if (operation == "-"){
                answer = answer + parseFloat(calc.slice(0,originalmarker)) - parseFloat(calc.slice(marker1+1,x+1));
            }
            display3.innerHTML = answer;
            calc = calcsave;
            break;
        }
        if (breakit == 1){
            breakit = 0;
            continue;
        }
        if (marker1 != 0){
            if (calc[x] == "+" || calc[x] == "-"){
                if (operation == "+"){
                    answer += parseFloat(calc.slice(marker1+1,x));
                }
                if (operation == "-"){
                    answer -= parseFloat(calc.slice(marker1+1,x))
                }
                operation = calc[x];
                marker2 = marker1 + 1;
                marker1 = x;
            }
        }

    }
}