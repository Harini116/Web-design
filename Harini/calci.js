function add(){
    var a = parseInt(document.getElementById("val1").value);
    var b = parseInt(document.getElementById("val2").value);
    var res = a+b;
    document.getElementById("result").innerHTML = "The answer is " + res;
}
function sub(){
    var a = parseInt(document.getElementById("val1").value);
    var b = parseInt(document.getElementById("val2").value);
    var res = a-b;
    document.getElementById("result").innerHTML = "The answer is " + res;
}
function mul(){
    var a = parseInt(document.getElementById("val1").value);
    var b = parseInt(document.getElementById("val2").value);
    var res = a*b;
    document.getElementById("result").innerHTML = "The answer is " + res;
}
function div(){
    var a = parseInt(document.getElementById("val1").value);
    var b = parseInt(document.getElementById("val2").value);
    var res = a/b;
    document.getElementById("result").innerHTML = "The answer is " + res;
}
function calc(){
    var c = parseInt(document.getElementById("val3").value);
    var d = parseInt(document.getElementById("val4").value);
    var e = document.getElementById("symbol").value;
    switch(e){
        case "+":
            var res1 = c + d;
            document.getElementById("result1").innerHTML = "The answer is " + res1;
            break;
        case "-":
            var res2 = c - d;
            document.getElementById("result1").innerHTML = "The answer is " + res2;
            break;
        case "*":
            var res3 = c * d;
            document.getElementById("result1").innerHTML = "The answer is " + res3;
            break;
        case "/":
            var res4 = c / d;
            document.getElementById("result1").innerHTML = "The answer is " + res4;
            break;
        default: 
            document.getElementById("result1").innerHTML = "Please Enter number";
            break;
    }
}