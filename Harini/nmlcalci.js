function zero(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "0";
}
function one(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "1";
}
function two(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "2";
}
function three(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "3";
}
function four(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "4";
}
function five(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "5";
}
function six(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "6";
}
function seven(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "7";
}
function eight(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "8";
}
function nine(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "9";
}
function plus(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "+";
}
function sub(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "-";
}
function mul(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "*";
}
function div(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "/";
}
function mod(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "%";
}
function openbrac(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "(";
}
function closebrac(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + ")";
}
function dec(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + ".";
}
function calculate() {
    var p = document.getElementById("result").innerHTML;
    var q = eval(p);
    document.getElementById("result").innerHTML = q;
}
function erase(){
    document.getElementById("result").innerHTML = " ";
}