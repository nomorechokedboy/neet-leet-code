import { ListNode } from '../../problems/LinkedList';

export const generateListNode = (vals: Array<number>): ListNode | null => {
  const init = new ListNode();
  let temp = init;
  vals.forEach((el) => {
    temp.next = new ListNode(el);
    temp = temp.next;
  });

  return init.next;
};
