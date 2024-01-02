const arr=[1,8,6,6,89,5,10];
arr.forEach((index, element, arr) => {
   // console.log(index,element,arr);// return a element of array, with index , and whole  array
});
const mynew=[];
arr.forEach((element)=>{
    if(element>1)
    mynew.push(element);
})
console.log(mynew);
const user=[

{
    name:"Ritik",
    age:23,
    mail:"xyz@gmail.com"
},
{
    name:"Ram",
    age:16,
    mail:"kjaj@gmail.com"
},
{
    name:"Shyam",
    age:21,
    mail:"abxba@gmail.com"
},
{
    name:"Ghanshyam",
    age:15,
    mail:"wbx@gmail.com"
},

]

user.forEach((item)=>{
    //if(item.name=="Ritik")
   // console.log(item.age, item.mail);
})

//console.log(' A name of User whose Age   is greater than 18');
user.forEach((item)=>{
    if(item.age>18){
        //console.log(item.name, item.mail);
    }
})

