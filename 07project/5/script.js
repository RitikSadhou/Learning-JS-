const body=document.querySelector('body')
const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const randomcolor=function(){
    const hex='123456789ABCDEF';
    let color='#';
    for(i=0; i<6; i++){
          color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let ready;
const startchanging=function(){
    ready=setInterval(function(){
        body.style.backgroundColor=randomcolor();
    },1000)
   
   
}
const stopchange= function(){
    clearInterval(ready);
}
start.addEventListener('click', startchanging);
stop.addEventListener('click', stopchange);