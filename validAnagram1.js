function validAnagram(w1,w2){
  // add whatever parameters you deem necessary - good luck!
  // create an object that contains key as character and count for w1
  
  if(w1.length !== w2.length) {
      return false;
  }
  console.log(w1.length, w2.length);

  let objW1 = {};
  let objW2 = {};
  
  for (let i= 0; i < w1.length; i++) {
      let char = w1.charAt(i)
      objW1[char] = objW1[char]++ || 1;
      
  }
  // create an object that contains key as character and count for w2
  
  for (let i= 0; i < w1.length; i++) {
      let char = w2.charAt(i)
      
      objW2[char] = objW2[char]++ || 1;
  }
  
  // compare every key and value with each other, if match correctly then retunrn true
  console.log('objW1', objW1);
  console.log('objW2', objW2);
  Object.keys(objW1).forEach((el)=> {
      if(objW1[el] !== objW2[el]){
          return false;
      }
  });
  
  return true;
}

validAnagram('ab','ab');