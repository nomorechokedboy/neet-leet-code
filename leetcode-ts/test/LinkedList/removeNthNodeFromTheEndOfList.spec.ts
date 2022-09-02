import {
  removeNthFromEnd,
  removeNthFromEndOp2,
  removeNthFromEndSol,
  removeNthFromEndWithArray,
} from '../../problems/LinkedList/removeNthNodeFromTheEndOfList';
import { generateListNode } from '../helper';

describe('Test cases for problem 19 leetcode', () => {
  it('should return [1, 2, 3, 5]', () => {
    const expected = generateListNode([1, 2, 3, 4]);

    const res = removeNthFromEnd(generateListNode([1, 2, 3, 4, 5]), 1);
    const op1 = removeNthFromEndWithArray(generateListNode([1, 2, 3, 4, 5]), 1);
    const op2 = removeNthFromEndSol(generateListNode([1, 2, 3, 4, 5]), 1);
    const op3 = removeNthFromEndOp2(generateListNode([1, 2, 3, 4, 5]), 1);

    expect(res).toEqual(expected);
    expect(op1).toEqual(expected);
    expect(op2).toEqual(expected);
    expect(op3).toEqual(expected);
  });

  it('should return []', () => {
    const res = removeNthFromEnd(generateListNode([1]), 1);
    const op1 = removeNthFromEndWithArray(generateListNode([1]), 1);
    const op2 = removeNthFromEndSol(generateListNode([1]), 1);
    const op3 = removeNthFromEndOp2(generateListNode([1]), 1);

    expect(res).toBe(null);
    expect(op1).toBe(null);
    expect(op2).toBe(null);
    expect(op3).toBe(null);
  });

  it('should return [1]', () => {
    const expected = generateListNode([1]);
    const res = removeNthFromEnd(generateListNode([1, 2]), 1);
    const op1 = removeNthFromEndWithArray(generateListNode([1, 2]), 1);
    const op2 = removeNthFromEndSol(generateListNode([1, 2]), 1);
    const op3 = removeNthFromEndOp2(generateListNode([1, 2]), 2);

    expect(res).toEqual(expected);
    expect(op1).toEqual(expected);
    expect(op2).toEqual(expected);
    expect(op3).toEqual(generateListNode([2]));
  });
});
