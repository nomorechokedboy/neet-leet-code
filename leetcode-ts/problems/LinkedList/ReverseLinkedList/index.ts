import { ListNode } from '../entity';

export function reverseList(head: ListNode | null) {
  let prev: ListNode | null = null;

  while (head) {
    let temp = head.next;
    head.next = prev;

    prev = head;
    head = temp;
  }

  return prev;
}
