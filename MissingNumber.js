function getMissingNumber(arr){
    let missing = 0;
    let n = arr.length + 1;
    const sum = n*(n+1)/2;
    let restSum = 0;
    for(let i = 0; i < arr.length; i++){
        restSum = restSum + arr[i];
    }
    return sum - restSum;
}


getMissingNumber([7,5,3,1,4,2]);