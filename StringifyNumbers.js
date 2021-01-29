function stringifyNumbers(obj){
    let stringify = {};
    let keys = Object.keys(obj);
    for(let i=0; i< keys.length; i++){ 
        if(typeof obj[keys[i]] === 'number') stringify[keys[i]] = obj[keys[i]].toString();
        else if(typeof obj[keys[i]] === 'object' && !Array.isArray(obj[keys[i]])) stringify[keys[i]] = stringifyNumbers(obj[keys[i]]);
        else stringify[keys[i]] = obj[keys[i]]; 
    }

    return stringify;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj);