const arr=[1,8,6,9,5,3,7]
const my=arr.forEach(element => { // For each mmethod does not return a new array or vlaue
    if(element>5)
    return element;

});
//console.log(my);

//const vlaues=arr.filter((item)=>item>4)// when we have not declare {} so we can return a value without return keyword
//console.log(vlaues);
const vlaues=arr.filter((item)=>{
   return  item>4;
})
//console.log(vlaues);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const genreanme=books.filter((item)=>{
    return item.genre=='Fiction';
  });

 const edition=books.filter((item)=> item.edition<2000)
 console.log(edition);
  
  //console.log(genreanme);