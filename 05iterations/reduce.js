const array=[1,2,3,4,5,6,7,8,9,10]
const intialize=0
const sum=array.reduce((accumlater, current)=>accumlater+current,intialize)// first time accumalet value equal to intialize value and after store a sum of previous value .
//console.log(sum);

const shoping=[
    {
      itemname:'Motoedge 40 neo',
      price:21999
    },
    {
        itemname:'Glass guard',
        price:499
      },
      {
        itemname:'Airpods',
        price:999
      },
]
const TotalPrice=shoping.reduce((acc,item)=>acc+item.price,0)

console.log(TotalPrice);
// Diffrent Ways to Declared a Reduce Method
/*const TotalPrice=shoping.reduce((acc,item)=>{
    return acc+item.price
},0)

const TotalPrice=shoping.reduce(function(acc,item){
    return acc+item.price
},0)
console.log(TotalPrice);*/