import { ListNode, mergeTwoList, reverseList } from '.';

export const reorderList = (head: ListNode | null): void => {
  let trail = head;

  while (trail?.next && trail?.next?.next) {
    let iter = head?.next;
    while (iter?.next?.next) {
      iter = iter.next;
    }

    if (!iter) throw Error('Iter is null');
    if (!iter.next) throw Error('Iter next is null');

    const temp = trail.next;
    iter.next.next = temp;
    trail.next = iter.next;
    iter.next = null;
    if (trail.next && trail.next.next) trail = trail.next.next;
  }
};

export const reorderlistOptimal = (head: ListNode | null): void => {
  let slow = head,
    fast = head?.next;
  while (slow && fast && fast.next) {
    slow = slow?.next;
    fast = fast.next.next;
  }

  // if (!slow?.next) throw Error('Slow next is null');
  // let l2 = reverseList(slow.next);
  // slow.next = null;

  if (!slow) throw Error('Dmm');
  let l2: typeof head = null;
  let iter = slow?.next;
  slow.next = null;
  while (iter) {
    const temp = iter.next;
    iter.next = l2;

    l2 = iter;
    iter = temp;
  }

  while (l2) {
    if (!head) throw Error('Head is null');
    const temp1 = head?.next,
      temp2 = l2.next;

    head.next = l2;
    l2.next = temp1;

    head = temp1;
    l2 = temp2;
  }
};

export const reorderListArray = (head: ListNode | null): void => {
  const list: (ListNode | null)[] = [];
  let iter = head;
  while (iter) {
    list.push(iter);
    iter = iter.next;
  }

  let i = 0,
    j = list.length - 1;
  while (true) {
    let temp1 = list[i],
      temp2 = list[j];
    if (!temp1) throw Error('Fuck this shit im out');
    if (!temp2) throw Error('Fuck this shit im out');
    if (j - i === 1 || j - i === 0) {
      temp2.next = null;
      break;
    }

    temp1.next = temp2;
    temp2.next = list[i + 1];
    i++, j--;
  }
};
