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

function sortedFrequency(arr, target){
 let index = binarySearch(arr, target);
 let count = 1;
 let forward = true;
 let backward = true;
  if(index === -1) return index;
  let i = 1;
  while(forward || backward){
      if(arr[index + i] === target){
          forward = true;
          count++;
      } else {
          forward = false;
      }
      
      if(arr[index - i] === target){
          backward = true;
          count++;
      } else {
          backward = false;
      }
      i++;
  }
  
  return count;
}

sortedFrequency([1,1,2,2,2,2,3],2);