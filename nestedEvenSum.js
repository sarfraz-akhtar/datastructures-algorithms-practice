function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let values = Object.values(obj);
  let sum = 0;
  for(let i = 0; i < values.length; i++){
      if(typeof values[i] === 'object') sum = sum + nestedEvenSum(values[i]);
      else if(typeof values[i] === 'number' && values[i]%2 === 0){
         sum = sum + values[i]; 
      } else continue;
      
  }
  
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj2);