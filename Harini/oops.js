function test(){
ad = {
    name: prompt("Enter Name"),
    age: prompt("Enter Age"),
    profession: prompt("Enter your profession"),
    work: function(){
        document.write(this.name + " is a " + this.profession + "<br>" + "Age is " + this.age);
    },
    family:{father: 'Praba',mother:'Jayanthy',sister:'Hema'},
}
console.log(ad);
console.log(ad.work());
console.log(ad.family.mother,ad.family.father);
}
var v1 = "This is my Projects.";
console.log(v1.charAt(5));
console.log(v1.charCodeAt(7));//Returns ASCII Values
console.log(v1.concat("Thankyou"));
console.log(v1);
v1 = v1.concat("<br>Thankyou");
console.log(v1);
console.log(v1.indexOf("i"));
console.log(v1.lastIndexOf("s"));
var r = "http://127.0.0.1:5500/oops.html ?name=test";
console.log(encodeURI(r));
console.log(decodeURI(r));
console.log(decodeURIComponent("JavaScript%20%20%20Test"));
console.log(v1.replace('Projects','Program'));
var test = [4,3,9,1];
console.log(test.sort());