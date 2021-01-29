var arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test02" },
  { id: 2, name: "test002" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" }
];

var duplicates = [];
var currentIndex = 0;

var filteredArr =  arr.reduce((acc,current)=>{
  console.log(acc,current);
  var x = acc.find((item)=> item.id === current.id);
   if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }  
},[])


console.log(filteredArr);