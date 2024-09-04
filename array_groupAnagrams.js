

const groupAnagrams = (myArray) => {
    let sortedTemp = "";
    let storingMap = new Map();
   
    
    //sorting the key
    for (let i = 0; i < myArray.length; i ++){
        //sortedTemp = myArray[i].split("").sort().join("");
        sortedTemp = myArray[i].split("").sort().join("");
        console.log(sortedTemp);
        
        if (storingMap.has(sortedTemp)) {
            storingMap.get(sortedTemp).push(myArray[i]);
            
        } else {
            storingMap.set(sortedTemp, [myArray[i]]);
        }
    }
    
    console.log(Array.from(storingMap.values()));
    
    //group anagram into an array
    console.log(storingMap.values());
    return Array.from(storingMap.values());
}


groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']); //[["bat"],["nat","tan"],["ate","eat","tea"]]