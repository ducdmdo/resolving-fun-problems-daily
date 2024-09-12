
const itemInCommon = (array1, array2) => {
    let storingObject = {};

    let arr1Lenght = array1.length - 1;
    
    for (let i = 0; i < array1.length; i++) {
        storingObject[array1[i]] = true;
    }
    console.log(storingObject);
    
    for (let j = 0; j < array2.length; j++) {
        console.log(storingObject[array2[j]]);
        if (storingObject[array2[j]]) return true;
    }
    return false;
}

itemInCommon([1, 3, 5], [2, 4, 5]);
itemInCommon([1, 3, 5], [2, 4, 6]);
