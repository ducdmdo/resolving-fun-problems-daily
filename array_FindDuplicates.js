
const findDuplicates =(array) => {
    let storingObject = {};
    let resultArr = [];
    
    //iterate throught the array and store key in the object
    for (let i = 0; i < array.length; i ++) {

        if (storingObject[array[i]]) {
            resultArr.push(array[i]);
        }
        
        storingObject[array[i]] = true;
        console.log(storingObject); 

    }
    console.log(resultArr);
    return resultArr; 
}

findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]);
//findDuplicates([1, 2, 3]);