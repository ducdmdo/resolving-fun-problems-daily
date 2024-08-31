
const firstNonRepeatingChar = (myString) => {
    let storingMap = new Map();
    
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


firstNonRepeatingChar("aabbcc");
firstNonRepeatingChar("aabbcde");