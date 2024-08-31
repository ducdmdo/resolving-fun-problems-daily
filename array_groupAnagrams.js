

const groupAnagrams = (myArray) => {
    let sortedTemp = "";
    let storingMap = new Map();
   
    
    //find down an anagram ?
    for (let i = 0; i < myArray.length; i ++){
        sortedTemp = myArray[i].split("").sort().join("");
        
        if (storingMap.has(sortedTemp)) {
            storingMap.get(sortedTemp).push(myArray[i]);
            
        } else {
            const group = [];
            storingMap.set(sortedTemp, group);
        }
    }
    
    console.log(Array.from(storingMap.values()));
    
    //group anagram into an array
    return Array.from(storingMap.values());
}


groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);