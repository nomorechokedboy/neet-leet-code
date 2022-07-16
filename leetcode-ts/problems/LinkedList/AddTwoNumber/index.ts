import { ListNode } from '../entity';

/* First Attemp */

// export const addTwoNumber = (
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null => {
//   if (!l1) return l2;
//   if (!l2) return l1;

//   let n = 0;
//   let init = new ListNode();
//   let iter = init;
//   while (l1 && l2) {
//     const temp = l1.val + l2.val + n;
//     const sum = temp >= 10 ? temp % 10 : temp;

//     iter.next = new ListNode(sum);

//     n = temp >= 10 ? Math.floor(temp / 10) : 0;
//     l1 = l1.next;
//     l2 = l2.next;
//     iter = iter.next;
//   }

//   while (l1) {
//     const temp = l1.val + n;
//     iter.next = new ListNode(temp >= 10 ? temp % 10 : temp);
//     n = temp >= 10 ? Math.floor(temp / 10) : 0;

//     iter = iter.next;
//     l1 = l1.next;
//   }

//   while (l2) {
//     const temp = l2.val + n;
//     iter.next = new ListNode(temp >= 10 ? temp % 10 : temp);
//     n = temp >= 10 ? Math.floor(temp / 10) : 0;

//     iter = iter.next;
//     l2 = l2.next;
//   }

//   if (n > 0) iter.next = new ListNode(n);

//   return init.next;
// };

/* Optimal Attemp */

export const addTwoNumber = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let init = new ListNode();
  let temp = init;
  let carry = 0;

  while (l1 || l2 || carry) {
    const node = new ListNode(carry);
    l1 && ((node.val += l1.val), (l1 = l1.next));
    l2 && ((node.val += l2.val), (l2 = l2.next));

    node.val >= 10
      ? ((carry = Math.floor(node.val / 10)), (node.val %= 10))
      : (carry = 0);

    temp.next = node;
    temp = temp.next;
  }

  return init.next;
};
