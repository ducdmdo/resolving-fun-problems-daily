/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 /** Constraints
 k == lists.length
 0 <= k <= 104
 0 <= lists[i].length <= 500
 -104 <= lists[i][j] <= 104
  */

 /** Test cases
 1. lists = [[1,4,5],[1,3,4],[2,6]] => output: [1,1,2,3,4,4,5,6]
 2. lists = [] => output: []
 3. lists = [[]] => output: []
 4. lists = [[-1,0,4], [-3,4,9], [-9,1,9]] => output:[-9,-3,-1,0,1,4,4,9,9]
 5. lists = [[-1,0,4,7], [-3,4,9], [-9,1,9]]
 **/

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


function mergeBetter(otherList) {
    let otherHead = otherList.head;
    let dummy = { value: 0, next: null };
    let current = dummy;

    while (this.head !== null && otherHead !== null) {
        if (this.head.value < otherHead.value) {
            current.next = this.head;
            this.head = this.head.next;
        } else {
            current.next = otherHead;
            otherHead = otherHead.next;
        }
        current = current.next;
    }

    if (this.head !== null) {
        current.next = this.head;
    } else {
        current.next = otherHead;
        this.tail = otherList.tail;
    }

    this.head = dummy.next;
    this.length += otherList.length;
}

  function mergeLists(a,b){
    let temp = new ListNode(0);
    let current = temp;

    while ((a != null) && (b != null)){
        if (a.val < b.val) {
            console.log("current.next = a---" + current.next + "=" + a);
            current.next = a;
            console.log("a = a.next---" + a + "=" + a.next);
            a = a.next;
        } else {
            console.log("current.next = b---" + current.next + "=" + b);
            current.next = b;
            console.log("b = b.next---" + b + "=" + b.next);
            b = b.next;
        }
        console.log(" current = current.next---" + current + "=" + current.next);
        current = current.next;
    }
    console.log("current.next = a || b---" + current.next + "=" + a + "||" + b);
    current.next = a || b;
    return temp.next;

}

var merge2Lists = function(l1, l2){
    if (!l1) return l2;
    if (!l2) return l1;
    console.log("l1.val---"+l1.val);
    console.log("l2.val---"+l2.val);
    if (l1.val < l2.val) {
        l1.next =  merge2Lists(l1.next, l2);
        return l1;
    } else {
        console.log("l2.next, l1---" + l2.next + "," + l1);
        l2.next = merge2Lists(l2.next, l1);
        console.log("l2---" + l2);
        return l2;
    }
}



var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    while (lists.length > 1){
        let a = lists.shift();
        let b = lists.shift();
        let mergeAB = merge2Lists(a,b);
        lists.push(mergeAB);
    }
    console.log(lists[0]);
    return lists[0]
    
};



mergeKLists([[1,4,5],[1,3,4],[2,6]]);

