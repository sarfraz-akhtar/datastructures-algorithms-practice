function binarySearch(arr,target){
  // add whatever parameters you deem necessary - good luck!
  let firstIndex = 0;
  let lastIndex = arr.length -1;
  let midPointer = Math.floor(firstIndex + arr.length/2);
  
  
  if(target < arr[firstIndex] || target > arr[lastIndex]) return -1;
  while (target >= arr[firstIndex] && target <= arr[lastIndex]) {
      if(arr[midPointer] === target)  return midPointer;
      else if(arr[firstIndex] === target)  return firstIndex;
      else if(arr[lastIndex] === target)  return lastIndex;
      else if(target < arr[midPointer]) {
          lastIndex = midPointer - 1;
          midPointer = firstIndex + Math.floor((lastIndex - firstIndex)/2);
      }
      else if(target > arr[midPointer]) {
          firstIndex = midPointer + 1;
          midPointer = firstIndex + Math.floor((lastIndex - firstIndex)/2);
      }
  }
}

console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],4));
console.log(binarySearch([1,2,3,4,5],5));

