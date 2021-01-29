function collectStrings(obj){
    let collection = [];
    let values = Object.values(obj);
    for(let i=0; i< values.length; i++) { 
        if(typeof values[i] === 'string') collection.push(values[i]);
        else if(typeof values[i] === 'object' && !Array.isArray(values[i])){ collection.push(collectStrings(values[i]));
        }
    }
    
    return collection;
}
var obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj); // ["foo", "bar", "baz"]);