import {
  reorderListArray,
  reorderlistOptimal,
} from '../../problems/LinkedList';
import { generateListNode } from '../helper';

describe('Reorder list problem (medium) on leetcode: https://leetcode.com/problems/reorder-list/', () => {
  it('Should return 1->4->3->2 for input 1->2->3->4', () => {
    const expected = generateListNode([1, 4, 2, 3]);
    const head = generateListNode([1, 2, 3, 4]);
    const headCp = generateListNode([1, 2, 3, 4]);

    reorderlistOptimal(headCp);
    reorderListArray(head);

    expect(head).toEqual(expected);
    expect(headCp).toEqual(expected);
  });

  it('Should return 1->5->2->4->3 for input 1->2->3->4->5', () => {
    const expected = generateListNode([1, 5, 2, 4, 3]);
    const head = generateListNode([1, 2, 3, 4, 5]);
    const headCp = generateListNode([1, 2, 3, 4, 5]);

    reorderlistOptimal(headCp);
    reorderListArray(head);

    expect(head).toEqual(expected);
    expect(headCp).toEqual(expected);
  });
});
