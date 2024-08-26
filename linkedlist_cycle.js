/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//valid pos could be -1 or a valid (0,1,2...)
//
//resolve it with O(1)
//return true if there is a cycle in the linked list. Otherwise, return false
//-------- Test Cases ----------//
//1. head = [3,2,0,-4], pos = 1 => return true
//2. head = [1,2], pos = 0 => return true
//5. head = [1], pos = 0 => return true
//6. head = [1], pos = 1 => return false
//3. head = [1], pos = -1 => return false
//4. head = [], pos = 0 => return false

//-------- Test Cases ----------//

const hasCycle1 = (head) => {
    //if myLinkedList contains pos => then return true
    let fastMove = head;
    while (fastMove && fastMove.next){
        fast = fastMove.next.next;
        head = head.next;
        
        if (head === fastMove) return true;
    }
    return false;

}

const hasCycle = (head) => {
    let myDic = new Map();
    let tempNode = head;

    for (let index = 0; index < this.length; index ++) {
        myDic.set(tempNode, 0);
        tempNode = tempNode.next;
        if (myDic.has(tempNode)) {
            myDic.set(tempNode, 1);
            return true;
        }
    }
    return false;
};