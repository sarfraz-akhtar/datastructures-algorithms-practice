function getBinarySearch(arr,number) {
    let mid;
    let low = 0;
    let high = arr.length -1;
    mid = low + Math.floor((high - low)/2);
    while(number !== arr[mid]){
        
         if(low === high) break;
        if(number === arr[mid]){
            break;
        }
        if(number > arr[mid]){
            low = mid + 1;
        } else {
            high  = mid;
        }

        mid = low + Math.floor((high - low)/2);
    }

    console.log(low, high, mid)

    return arr[mid] === number;
}

getBinarySearch([3,5,8,10,16,19,21,25], 0);


