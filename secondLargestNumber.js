function getSecondLargestNumber(arr){
    let highest = 0;
    let secondHighest = 0;
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        if(current > highest){
            secondHighest = highest;
            highest = current;
        }
        else if(current > secondHighest && current != highest){
            secondHighest = current;
        }

    }

    return secondHighest;
}

getSecondLargestNumber([7,5,6,1,4,2,15,39]);