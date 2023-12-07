//var a=55;
let a=55; // global variable 
const b=40;
if(true){
//  this let and const variable are not access outside of function but var is access

    let a=10;// Blocked scoped local scope
    const b=20;
    var c=30;
    console.log(a);
}
console.log(c);
console.log(a);
console.log(b);