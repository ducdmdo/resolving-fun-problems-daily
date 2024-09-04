/**
 * 
 */

const longestCommonSubsequence = (text1, text2) => {
    let n1 = text1.length;
    let n2 = text2.length;

    //initiative table
    let table = new Array(n1+1);
    console.log(table);
    for (let i = 0; i < n1 +1; i++) {
        table[i] = new Array(n2+1).fill(0);
    }
    console.log(table);

    //caculate longest common subsequence
    for (let i = 1; i <= n1; i ++) { // vertical
        for (let j = 1; j <= n2; j++){ // horizonal
            //if previous 
            //console.log("text1[i-1]:"+text1[i-1]);
            //console.log("text2[j-1]:"+text1[j-1]);
            if (text1[i-1] === text2[j-1]) table[i][j]=table[i-1][j-1] +1;
            else table[i][j] = Math.max(table[i-1][j], table[i][j-1]);
        }
    }
    console.log(table[n1][n2]);
    return table[n1][n2];
}

const longestCommonSubsequence_new = (text1, text2) =>{
    let iCount = 0;

    for (let i = 0; i < text1.length; i ++) {
        for (let j = 0; j < text2.length; j++) {
            console.log("text1[i]:" + text1[i]);
            console.log("text2[j]:" + text2[j]);
            if (text1[i] === text2[j]) {
                iCount++;
                i++;
                j=-1;
            }
        }
    }
    console.log(iCount);
    return iCount;
}

longestCommonSubsequence_new('abcde','ace');
//longestCommonSubsequence('abcde','ace');