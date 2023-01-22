var arr = [116,"Hi",true,15.6,'h',['x','y','z'],{name:'Haarika',age:22},16];
console.log(arr);
console.log(arr);
console.log(arr[0]);
console.log(arr[5]);
console.log(arr[6].name);
arr.push(['Praba','Jay','Hemz','Cheems','Jack','Tiger','Ruby','Hello']);
document.write(arr);
arr.pop();
window.document.write("<br><br><br>",arr);
console.group("A");
console.assert(arr[0]<5,"Greater");
console.groupEnd("A");
//console.clear();
console.group("B");
console.log("hi");
console.time("loop time");
for(var i=0;i<10;i++){
    console.count("Loop Count");
}
console.timeEnd("loop time");
console.groupEnd("B");
console.dir(document.head);
console.log(document.head);
var b = 0;
if(b<1){
    console.error("I'm a error statement");
    console.warn("I'm a warning Message");
}
console.table(arr);
console.table(arr[6]);
console.info("Thankyou");