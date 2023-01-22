function tables(){
    var a = parseInt(document.getElementById("a").value);
    var r = " ";
    for(var i=1;i<=12;i++){
        r = r + a + "x" + i + "=" + (a*i) + "<br>";
    }
    document.getElementById("a1").innerHTML = r;
}
function tables2(){
    var w1 = parseInt(document.getElementById("b").value);
    var res = " ";
    var i = 1;
    while(i<=12){
        res = res + w1 + "x" + i + "=" + (w1*i) + "<br>";
        i++;
    }
    document.getElementById("b1").innerHTML = res;
}
function tables3(){
    var d1 = parseInt(document.getElementById("c").value);
    var res1 = " ";
    var i = 1;
    do{
        res1 = res1 + d1 + "x" + i + "=" + (d1*i) + "<br>";
        i++;
    }while(i<=12);
    document.getElementById("c1").innerHTML = res1;
}