const form=document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
     const results= document.querySelector('#results');
     const Guide= document.querySelector('#Guide')
     
    if(height<0 || height===" "|| isNaN(height)){
        results.innerHTML=`Please give me valid height ${height}`;
    }
     else if(weight<0 || weight===" "|| isNaN(weight)){
        results.innerHTML=`Please give me valid weight ${weight}`;
    }
    
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
    
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6 )
      {
        form.children[4].style.color = "red"
        Guide.innerHTML="your weight is Under Weight";
     }
     else if(bmi===18.6 || bmi<=24.9)
     {  
         form.children[4].style.color = "green"
         Guide.innerHTML="your are Healthy";
     }
     else if(bmi>24.9)
     {   
        form.children[4].style.color = "red"
         Guide.innerHTML="your are Overweight";
     }
     
      }
      
      

});
