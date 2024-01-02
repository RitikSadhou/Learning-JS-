const name="Ritik"
const age=23;
console.log((`my name is ${name} and my age is ${age}`));

//Another way to declared a string//
let myname= new String("Ritik")
console.log(myname.charAt(2));
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.indexOf('i'));
const newString = myname.substring(0, 4)
console.log(newString);

const anotherString = myname.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(myname.split('-'));