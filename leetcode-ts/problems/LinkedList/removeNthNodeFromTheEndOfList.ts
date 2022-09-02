import { ListNode } from './entity';

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let count = 1;
  var iter = head;
  while (iter?.next) {
    iter = iter.next;
    count++;
  }

  if (n === count && head?.next) return head.next;

  var iter = head;
  while (count !== n + 1 && iter) {
    iter = iter.next;
    count--;
  }

  if (!iter?.next) return null;

  iter.next = iter.next.next;
  return head;
}

export const removeNthFromEndWithArray = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  if (!head) return head;

  const list: ListNode[] = [];
  let iter: ListNode | null = head;
  while (iter) {
    list.push(iter);
    iter = iter.next;
  }

  if (n === list.length) return head.next;
  const len = list.length;
  const prev = len - n - 1;

  list[prev].next = list[len - n + 1] ?? null;

  return head;
};

export const removeNthFromEndSol = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  let dummy = new ListNode(0, head);
  let right = head;

  while (n > 0 && right) {
    right = right?.next;
    n--;
  }

  let left: typeof head = dummy;
  while (right && left) {
    right = right.next;
    left = left.next;
  }

  if (left?.next) left.next = left?.next?.next;

  return dummy.next;
};

export const removeNthFromEndOp2 = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  if (!head) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (slow && fast?.next) {
    if (n === 0) slow = slow?.next;

    if (n > 0) n--;

    fast = fast.next;
  }

  if (slow === fast) return null;

  if (n > 0) return head.next;

  if (slow?.next) slow.next = slow.next.next;

  return head;
};
