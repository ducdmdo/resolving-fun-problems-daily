// class Solution {
//   String removeStars(String s) {
//     String result = '';
//     int iLength = s.length;
//     int n = 0;

//     while (n < iLength) {
//       if (s[n] != '*') {
//         result += s[n]; //l,e,e,t,
//       } else {
//         result = result.substring(0, result.length - 1);
//       }
//       n++;
//       print(result);
//     }

//     return s;
//   }
// }
class Solution {
  String removeStars(String s) {
    List<String> result = [];
    int iLength = s.length;
    int n = 0;

    while (n < iLength) {
      if (s[n] == '*') {
        result.removeLast(); //l,e,e,t,
      } else {
        result.add(s[n]);
      }
      //print({result});
      n++;
    }

    return result.join('');
  }
}

void main() {
  final solution = Solution();
  solution.removeStars("leet**cod*e");
}
