import { ListNode } from '../entity';

export const mergeTwoList = (
  list1: ListNode | null,
  list2: ListNode | null
) => {
  if (!list1 || !list2) return null;
  let init = new ListNode();
  let prev: ListNode | null = init;

  while (list1 && list2) {
    list1?.val > list2?.val
      ? ((init.next = list2), (list2 = list2.next))
      : ((init.next = list1), (list1 = list1.next));

    init = init.next;
  }

  list1 ? (init.next = list1) : (init.next = list2);

  return prev.next;
};
