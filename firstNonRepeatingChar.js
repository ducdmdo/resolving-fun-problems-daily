
const firstNonRepeatingChar = (myString) => {
    let storingMap = new Map();
    
    //Saving into map table key and number of repeated time
    for (let i = 0; i < myString.length; i ++) {
        const tempChar = myString[i];
        storingMap.set(tempChar, (storingMap.get(tempChar) || 0) + 1);
    }
    
    
    for (let i = 0; i < myString.length; i ++) {
        const key = myString[i];
        if (storingMap.get(key) === 1){
            return key;
        }
    }
    
    return null;
}


firstNonRepeatingChar("aabbcde");
firstNonRepeatingChar("aabbcc");
