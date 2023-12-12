
// Immediately Invoked Function Expressions (IIFE)
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
(function my(name){
   //console.log(`${name}, Hello`);
})('ritik');

// if we two iife function call with together so first iife function should end with ";". other wise error show in node.

const sum=(function my(x,y){
   return x+y;
    
 })(2,3);
 
 console.log(sum);
// With Arrow function
( ()=>{
    console.log("hi");
}
)()