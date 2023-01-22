function pos(){
    var a1 = document.getElementById("id1");
    var num = "/^[0-9]+$";
    console.log(a1);
    if(a1.value>0){
        alert("Positive" + a1.value);
    }
    else if(a1.value.trim().length==0){
        alert("The field is empty");
    }
    else if(a1.value <0){
        alert("Negative");
    }
    else if(a1.value != num)
    {
        alert("Enter Only Numbers");
    }
}
    function evenodd(){
    var a1 = document.getElementById("id2");
    var num1 = "/^[0-9]+$";
    if(a1.value > 0){
        if((a1.value%2==0)){
            alert("Positive Even");
        }
        else{
            alert("Positive Odd");
        }
    }
    else{
        if(a1.value%2==0){
            alert("Negative Even");
        }
        else{
            alert("Negative Odd");
        }
    }
    }     
console.log("5" - "4");