const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(l, k) {
  let current = l;
  let head = null;

  while (current.next) {
    head = current;

    if (current.value == k) {
      current.value = current.next.value;
      current.next = current.next.next;
    } else current = current.next;
  }

  if (current.value == k) head.next = null;

  return l;
}


module.exports = {
  removeKFromList,
};
