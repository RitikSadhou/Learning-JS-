// this keyword :-” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function.//

const user={
    username:"Ritik",
    mail:"xyz@gmail.com",
    
    welcomemesg: function(){
       // console.log(`${this.username}, welcome!`);;
        //console.log(this);
    }

}
user.welcomemesg();
user.username="sadhou";
user.welcomemesg();


//console.log(this); return a window object on broswer and empty object in node

function my(){
     
    // console.log(this); this is also return a window object
    let nam="Ritik";
   //console.log(this.name); return undefined
}
my();

const myfun= function(){
    //console.log("oj")
}
myfun()

// ************************************* Arrow Function ********************************************//

/*const some=(n,m)=>{  // with {} always return 
    return n*m;
}*/

const some=(n,m)=> (n+m);
console.log(some(6,8));

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo());