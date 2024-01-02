//const user={}
//user.name="Ritik"
//user.age=23
//user.mob=2455
//console.log(user);


const user={
    name:"abc",
    age:55,
    mob:111111

}
const user2={
    name:"xyz",
    age:25,
    mob:254959
}


// now we create a new object and store a value of two old object with help spread operator//

//const final={...user , ...user2};
//const final=Object.assign({}, user, user2);
//console.log(final);
//console.log(user2);

console.log( `keys are :- ${Object.keys(user2)}`);
console.log( `values are :- ${Object.values(user2)}`);
console.log( `${Object.entries(user2)}`);


//we have array of object in js so we find those name whose age greater than 18 
let people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 16 }
  ];


  function filterByAgeGreaterThan18 (person) {
    return person.age>18;
  }

  // Use the filter method to get the desired result
let adults = people.filter(filterByAgeGreaterThan18);

// Extract names of adults
let adultNames = adults.map(person => person.name);

// Print the result
//console.log("Names of people with age greater than 18:", adultNames);