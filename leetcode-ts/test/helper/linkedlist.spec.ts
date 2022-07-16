import { generateListNode } from '.';
import { ListNode } from '../../problems/LinkedList';

describe('it should return a list node for an array of number input', () => {
  it('should return 2->4->3', () => {
    const expected = new ListNode(2, new ListNode(4, new ListNode(3)));
    const result = generateListNode([2, 4, 3]);
    expect(result).toEqual(expected);
  });

  it('should fail', () => {
    const expected = new ListNode(7, new ListNode(3, new ListNode(1)));
    const result = generateListNode([3, 7]);
    expect(result).not.toEqual(expected);
  });
});
