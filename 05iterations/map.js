const myarr=[1,8,1,3,8,5,6,366]
const newarr=myarr.map((item)=>item*10)
//console.log(myarr);
//console.log(newarr);
const chaining=myarr.map((item)=>item*10).map((item)=>item-1).filter((item)=>item%3==0)
console.log(chaining);