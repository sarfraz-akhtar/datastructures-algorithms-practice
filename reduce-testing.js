var array1 = [1,2,3,4];
var reducer = (acc, current) => {
    console.log(acc, current);
    if(current > 0){
     // console.log(acc, current);
       return acc + current; 
    } else return acc;

}

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer,0));