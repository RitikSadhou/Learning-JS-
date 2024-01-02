// function Defination

//function addtwonum(num1, num2){ 
  //  console.log(num1+num2); 
 //} 

function addtwonum(num1, num2){ 
   return (num1+num2);
}

const result =addtwonum(5,7);// function Call
//console.log(result);

function login(username){
    if(username===undefined){
        //console.log("enter a username");
    }
    else{
    //console.log(`${username} just logged in`);
    }
}
login()

function myfun(num1){
    return num1;
}
console.log(myfun(20,23));// output 20

//REST OPERATOR:- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.//

function calculateprice(...num){
    return num;
}

//console.log(calculateprice(10,20,10,10,"fbue"));

//   Function with array

const arr=[10,88,99,25]
function myarray(getarray){
    return getarray;
}

//console.log(myarray([10,220,45]));
console.log(myarray(arr));

// Function with object

const user={
    name:"Ritik",
    age:23
}

function myobj(getobj){
    return user;
}

console.log(myobj(user));