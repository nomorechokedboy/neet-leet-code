import { addTwoNumber } from '../../problems/LinkedList';
import { generateListNode } from '../helper';

describe('Add to numbers problem on leetcode: https://leetcode.com/problems/add-two-numbers', () => {
  it('should return a listnode looks like 7 -> 0 -> 8 -> null for l1=2->4->3 and l2=5->6->7', () => {
    const expected = generateListNode([7, 0, 8]);
    const l1 = generateListNode([5, 6, 4]);
    const l2 = generateListNode([2, 4, 3]);

    const result = addTwoNumber(l1, l2);
    expect(expected).toEqual(result);
  });

  it('should return a list node looks like 2->0->1 for l1=3->7 and l2=9->2', () => {
    const expected = generateListNode([2, 0, 1]);
    const l1 = generateListNode([3, 7]);
    const l2 = generateListNode([9, 2]);

    const result = addTwoNumber(l1, l2);
    expect(expected).toEqual(result);
  });

  it('should return a list node looks like 8->9->9->9->0->0->0->1 for l1=9->9->9->9 and l2=9->9->9->9->9->9->9', () => {
    const expected = generateListNode([2, 0, 1]);
    const l1 = generateListNode([3, 7]);
    const l2 = generateListNode([9, 2]);

    const result = addTwoNumber(l1, l2);
    expect(expected).toEqual(result);
  });
});
