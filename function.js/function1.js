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
        console.log("enter a username");
    }
    else{
    console.log(`${username} just logged in`);
    }
}


login()