/**
 * Array: Find Longest String ( ** Interview Question)
The findLongestString function aims to find the longest string from an array of strings (stringArray).

The function returns the longest string present in the given array.



Constraints:

The array can be empty or contain any number of elements.

Elements in the array must be strings.

If there are multiple strings of the same longest length, the function returns the first one it encounters.



Parameters:

stringArray: An array of strings.



Returns:

The function returns the longest string from the array stringArray.

If stringArray is empty, the function returns an empty string "".



Examples:

Basic Example

let myStrings = ["apple", "banana", "pea"];
let result = findLongestString(myStrings);
// The function should return "banana"
Array with Single Character Strings

let myStrings = ["a", "b", "c"];
let result = findLongestString(myStrings);
// The function should return "a"
Array with Multiple Longest Strings

let myStrings = ["orange", "cherry", "banana"];
let result = findLongestString(myStrings);
// The function should return "orange"
Array with Empty Strings

let myStrings = ["", "", ""];
let result = findLongestString(myStrings);
// The function should return ""
Array with Mixed Length Strings

let myStrings = ["apple", "a", "banana", "bb"];
let result = findLongestString(myStrings);
// The function should return "banana"
Empty Array

let myStrings = [];
let result = findLongestString(myStrings);
// The function should return ""


Note: The function assumes that the array contains strings. If you expect to encounter non-string elements, you should handle that separately before calling findLongestString.
 */

const findLongestString = (myStrings) => {

    let longestString ="";

    for (let string of myStrings) {
        if (string.length > longestString.length ) {
            longestString = string;
        }
    }
    console.log(longestString);
    return longestString;
}

findLongestString(["apple", "banana", "pea"]);
findLongestString(["a", "b", "c"]);
findLongestString(["orange", "cherry", "banana"]);
findLongestString(["", "", ""]);
findLongestString(["apple", "a", "banana", "bb"]);
findLongestString([]);