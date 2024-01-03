/*const green= document.querySelector('#box3');
document.querySelector('.Boxes').addEventListener('click', function(e){
    alert("Boxes are clicked");
})
green.addEventListener('click', function(e){// e is event capture 
    console.log(e);
    alert("Green color is clicked")
    e.stopPropagation();
   
})*/
document.querySelector('#google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();// stopPropagation
})


document.querySelector('.Boxes').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    console.log(e.target);
    let remove=e.target.parentNode;
    //remove.remove();
})
document.querySelector('#ParentBox').addEventListener('click', function(e){
   // console.log(e.target.parentNode);
})











/*
     // 1. in js every events run sequntially 
    // 2. event sholud not inject in html to reduce problem in code instead do
    //method-2
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked ")
    // }
    //but this approach is not recmmended , coz jab aap id par onclick event laga rhae hai toh onclik pr kuch problem ho sakti hai kyuki aapko bhot jyada information nahi milti hai apko EVENTLISTNERS use karna chahaiye they give us propogation ability 
    //method-3
    //   document.getElementById('green').addEventListener('click',function(){
    //       alert("Green clicked again ")

    //   }) 
      //third parameter is false defalut  -> document.getElementById('green').addEventListener('click',function(){},false) , in interview this question will asked , 
      // method -4 attachEvenet()
      //method -5 jQuery - on method 


      //3. event Object
      document.getElementById('green ').addEventListener('click',function(e){
          console.log(e); //pointer events 

      },true)  
      //**** event propogation  have 2 -> context 1.event bubbling 2.event capturing 


      //4.type , timestamp , defaultPrevented 
      //target,toElement, srcElement ,curremtTarget,
      //interview - clientX,clientY,screenX,screenY
      //altkey , ctrlkey,shiftkey,keycode


      //5.**** event propogation  have 2 -> context 1.event bubbling 2.event capturing 
      //1.bubbling event  - bubbles neecha se uper jate hai joh bhi inside-> outside 
      document.getElementById('images').addEventListener('click',function(e){
          console.log("cliked insde ul"); //pointer events 
      },false)
      document.getElementById('green ').addEventListener('click',function(e){
          console.log("green cliked"); //pointer events 
      },false)
 //output -> owl clicked  cliked inside ul
       //2.capturing event -top -> bottom 
       document.getElementById('boxes').addEventListener('click',function(e){
          console.log("Boxes are clicked"); //pointer events 
      },true)
      document.getElementById('owl').addEventListener('click',function(e){
          console.log("owl cliked"); //pointer events -> //output -> cliked inside ul  owl clicked
          e.stopPropagation()//stop propogatioon
      },true)
 //output -> cliked inside ul  owl clicked

document.getElementById('google').addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation() //propogaton stooped so inside ul then google clicked 
    console.log("google clicked")
},false)

*/