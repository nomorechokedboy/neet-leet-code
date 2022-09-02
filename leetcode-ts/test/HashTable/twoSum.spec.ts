import { twoSum } from '../../problems/HashTable';

describe('Test suite for two sum problem', () => {
  it('should return 0 and 1', () => {
    const result = twoSum([2, 7, 11, 15], 9);

    expect(result).toEqual([1, 0]);
  });

  it('should return 0 and 1', () => {
    const result = twoSum([3, 3], 6);

    expect(result).toEqual([1, 0]);
  });
});
