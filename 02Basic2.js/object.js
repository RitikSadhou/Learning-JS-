//singleton


// objects literals


// symble create
const sym= Symbol("key");
const user={
name:"Ritik",
[sym]:"Key2",
age:23,
email:"Ritiksadhou@gmail.com",
mob:124558,
sport:["cricket", "Football"]
}

/*console.log(user.name);
console.log(user.sport);
//another way to access a object//
console.log(user["email"]);
console.log( user[sym]);*/

// change a property of objects
user.email="sadhou@gmail.com";
console.log(user["email"]);

//Object.freeze(user);     "Object.freeze() this method is for becouse we can not modify a property of object" new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
//user.mob=987654;
//console.log(user.mob);

user.greeting=function () {
    console.log("Hello World");
}

console.log(user.greeting());

user.anothergreeting=function () {
    console.log(`this is mail id, ${this.email}`);
}
console.log(user.anothergreeting());