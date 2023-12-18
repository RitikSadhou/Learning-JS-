const arr=[1,8,6,6,89,5,10];
arr.Each((index, element, arr) => {
   // console.log(index,element,arr);// return a element of array, with index , and whole  array
});
arr.Each((element)=>{
    console.log(element*2);
})
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

user.Each((item)=>{
    //if(item.name=="Ritik")
   // console.log(item.age, item.mail);
})

//console.log(' A name of User whose Age   is greater than 18');
user.Each((item)=>{
    if(item.age>18){
        //console.log(item.name, item.mail);
    }
})

