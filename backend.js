var numb1, numb2, result = 0;
var operator = "";

var body = document.getElementById("body")


var screen = document.getElementById("disp");
var value = screen.value;
function one() {
    value = value + "1";
    console.log(value);
    screen.value = value;
    body.style.background = "black"
    screen.style.color = "white"
}
function two() {
    value = value + "2";
    console.log(value);
    screen.value = value;
    body.style.background = "yellow"
    screen.style.color = "black"
}
function three() {
    value = value + "3";
    console.log(value);
    screen.value = value;
    body.style.background = "tomato"
    screen.style.color = "black"
}
function four() {
    value = value + "4";
    console.log(value);
    screen.value = value;
    body.style.background = "antiquewhite"
    screen.style.color = "black"
}
function five() {
    value = value + "5";
    console.log(value);
    screen.value = value;
    body.style.background = "aqua"
    screen.style.color = "black"
}
function six() {
    value = value + "6";
    console.log(value);
    screen.value = value;
    body.style.background = "blueviolet"
    screen.style.color = "white"
}
function seven() {
    value = value + "7";
    console.log(value);
    screen.value = value;
    body.style.background = "brown"
    screen.style.color = "black"
}

function eight() {
    value = value + "8";
    console.log(value);
    screen.value = value;
    body.style.background = "chocolate"
    screen.style.color = "white"
}

function nine() {
    value = value + "9";
    console.log(value);
    screen.value = value;
    body.style.background = "crimson"
    screen.style.color = "white"
}

function zero() {
    value = value + "0";
    console.log(value);
    screen.value = value;
    body.style.background = "darkcyan"
    screen.style.color = "white"
}

function C() {
    value = "";
    console.log(value);
    screen.value = value;
    body.style.background = "white"
    screen.style.color = "black"
}


function backspace() {
    value = value.slice(0, -1);
    screen.value = value;
}

function plus() {
    operator = "+";
    numb1 = screen.value;
    value = "";
    screen.value = "";
    body.style.background = "lightblue"
    screen.style.color = "black"
}
function minus() {
    operator = "-";
    numb1 = screen.value;
    value = "";
    screen.value = "";
    body.style.background = "lightgreen"
    screen.style.color = "white"
}
function mul() {
    operator = "X";
    numb1 = screen.value;
    value = "";
    screen.value = "";
    body.style.background = "lime"
    screen.style.color = "white"
}
function division() {
    operator = "/";
    numb1 = screen.value;
    value = "";
    screen.value = "";
    body.style.background = "olive"
    screen.style.color = "white"
}

function calc() {
    numb1 = parseFloat(numb1);
    numb2 = parseFloat(value);
    if (operator === "+") {
        result = numb1 + numb2;
    }
    else if (operator === "-") {
        result = numb1 - numb2;
    }

    else if (operator === "X") {
        result = numb1 * numb2;
    }

    else {
        result = numb1 / numb2;
    }

    screen.value = result
    body.style.background = "indigo"
    screen.style.color = "white"
}