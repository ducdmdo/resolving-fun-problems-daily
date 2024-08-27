/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 /*** test cases ***
 1. head = [1,2,3,4,5], n = 2 => return [1,2,3,5]. Length = 5, n =2 => index = 3
 2. head = [1], n = 1 => return [] => 1-1 => index = 0
 3. head = [1,2], n = 1 => return [1] => index = 2 - 1 = 1

 4. head = [], n = 1 => return [] - nothing to remove
 5. head = [1,2,3], n = 0 => return [1,2,3]
 5. head = [1], n = 2 => return [1] - invalid kth is bigger than linkedlist length
 6. head = [1,2], n = -1 => return [1,2]
  */
 var removeNthFromEnd = function(head, n) {
    //Use resultNode to point to the head
    let tempNode = new ListNode(-Infinity);
    tempNode.next = head;
    let resultNode = tempNode;

    //move to Nth position
    let count = 0;
    let frontNode = head;
    while (count < n) {
        frontNode = frontNode.next;
        count++;
    }
    // keep track removedNode and prevNode
    let removedNode = head;
    let prevNode = tempNode;

    //Go throught the linkedlist
    while (frontNode){
        frontNode = frontNode.next;
        removedNode = removedNode.next;
        prevNode = prevNode.next;
    }
    prevNode.next = removedNode.next;
    removedNode.next = null;

    return resultNode.next;

};