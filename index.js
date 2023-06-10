var clearAll = document.querySelector(".clearall");
var screen = document.querySelector(".screen p");
var numButtons = document.querySelectorAll(".number")
var numScreen = 0;
var numPrev = 0;
var op = "none";
var eq;
clearAll.onclick = function clearAll(){
    numScreen = 0;
    numPrev = 0;
    screen.innerHTML = 0;
    op = "none";
}

function typeNum(num){
    num = num.innerText;
    if(screen.innerHTML.length < 9){
    if(numScreen === 0){
        numScreen = num;
    }
    else{
        numScreen = String(numScreen) + String(num);
    }
    screen.innerHTML = numScreen;}
}
function decimalPoint(){
    numScreen = String(numScreen) + ".";
    screen.innerHTML = numScreen;
}
function plus(){
    numScreen = parseFloat(numScreen);
    if(op == "none"){
        op = "plus";
        numPrev = numScreen;
        numScreen = 0;
        screen.innerHTML = numPrev;
        }
        else{
            equals();
            op = "plus";
            numPrev = eq;
            numScreen = 0;
            screen.innerHTML = numPrev;
    
        }
}
function minus(){
    numScreen = parseFloat(numScreen);
    if(op == "none"){
        op = "minus";
        numPrev = numScreen;
        numScreen = 0;
        screen.innerHTML = numPrev;
        }
        else{
            equals();
            op = "minus";
            numPrev = eq;
            numScreen = 0;
            screen.innerHTML = numPrev;
    
        }
}
function prod(){
    numScreen = parseFloat(numScreen);
    if(op == "none"){
    op = "prod";
    numPrev = numScreen;
    numScreen = 0;
    screen.innerHTML = numPrev;
    }
    else{
        equals();
        op = "prod";
        numPrev = eq;
        numScreen = 0;
        screen.innerHTML = numPrev;

    }
}
function divide(){
    numScreen = parseFloat(numScreen);
    if(op == "none"){
        op = "divide";
        numPrev = numScreen;
        numScreen = 0;
        screen.innerHTML = numPrev;
        }
        else{
            equals();
            op = "divide";
            numPrev = eq;
            numScreen = 0;
            screen.innerHTML = numPrev;
    
        }
}
function modulo(){
    numScreen = parseFloat(numScreen);
    if(op == "none"){
        op = "modulo";
        numPrev = numScreen;
        numScreen = 0;
        screen.innerHTML = numPrev;
        }
        else{
            equals();
            op = "modulo";
            numPrev = eq;
            numScreen = 0;
            screen.innerHTML = numPrev;
    
        }
}
function plMn(){
    numScreen = parseFloat(numScreen);
    if(op == "none"){
    numScreen = -numScreen;
    screen.innerHTML = numScreen;
    }
    else{
        equals();
        op = "none";
        numPrev = -eq;
        numScreen = -eq;
        screen.innerHTML = numPrev;
    }
}
function equals(){
    if(op == "plus"){
        eq = Number(numPrev) + Number(numScreen);
        eq = formatFloats(eq); 
    }
    if(op == "minus"){
        eq = numPrev - numScreen;
        eq = formatFloats(eq);
    }
    if(op == "prod"){
        eq = numPrev * numScreen;
        eq = formatFloats(eq);
    }
    if(op == "divide"){
        eq = numPrev / numScreen;
        eq = formatFloats(eq);
    }
    if(op == "modulo"){
        eq = numPrev % numScreen;
    }
    if(String(eq).length > 9){
        screen.innerHTML = "Error";
    }
    else{
    screen.innerHTML = eq;
    numScreen = eq;
    op = "none";
    }
}
function formatFloats(eq){
    eq = parseFloat(eq.toFixed(8));
    return eq
}



