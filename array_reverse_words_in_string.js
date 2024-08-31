/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    // replace all the space with underscore then split by underscore
   let [...tempArray] = s.split(" ").filter(char => char !== "");
   let start = 0;
   let end = tempArray.length -1;

   while (start < end) {
       let temp = tempArray[start];
       tempArray[start] = tempArray[end];
       tempArray[end] = temp;
       start++;
       end--;
   }
   s = tempArray.join(" ");

   console.log(s);
   return s;

};