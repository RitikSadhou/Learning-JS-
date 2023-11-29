
//Stack(Primitive Datatypes) , Heap(Non Primitive , Refrence)// 

let myname="Ritik"
let anothername=myname
anothername="Gullu"
console.log(myname);
console.log(anothername);

//heap Example//
let user1={
    name:"Ritik",
    age:23
}
let user2=user1;
user2.name="Sadhou";
console.log(user1);
console.log(user2);


/*let arr=[1,2,3,4,5];
let arr2=arr;
arr2.pop();
console.log(arr);
console.log(arr2);

//How to copy refence Value With help of Spead Operator//
let a=[1,2,3,4,5];
let b=[...a];
arr.pop();
console.log(a);

