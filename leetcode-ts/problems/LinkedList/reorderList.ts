import { ListNode } from '.';

export const reorderList = (head: ListNode | null): void => {
  let n1 = head;
  while (n1?.next?.next) {
    n1 = n1?.next;
  }

  if (!n1?.next) return;

  if (!head?.next) return;

  n1.next.next = head.next;
  head.next = n1.next;
  n1.next = null;
};
