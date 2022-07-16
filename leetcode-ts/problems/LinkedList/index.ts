export * from './AddTwoNumber';
export * from './MergeTwoList';
export * from './ReverseLinkedList';
export * from './entity';
import { ListNode } from './entity';

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (!head) return head;

  let temp: ListNode | null = head;

  while (temp?.next) {
    if (temp.next.val === val) temp.next = temp.next?.next;
    else {
      temp = temp.next;
    }
  }

  return head.val === val ? head.next : head;
}

export const deleteNode = (root: ListNode | null): void => {
  root!.val = root?.next?.val!;
  root!.next = root?.next?.next!;
};
