import { smallestDifferent } from '../../problems/Sort';

describe('Smallest different problem test', () => {
  it('should return 1', () => {
    const res = smallestDifferent([5, 4, 10, 1]);
    expect(res).toBe(1);
  });

  it('should return 2', () => {
    const res = smallestDifferent([78, 4, 90, 80]);
    expect(res).toBe(2);
  });

  it('should return 0', () => {
    const res = smallestDifferent([78, 4, 80, 80]);
    expect(res).toBe(0);
  });

  it('should return 3', () => {
    const res = smallestDifferent([
      80, 100, 3, 6, 12312, 123, 1241, 123651, 12316, 123165, 123135, 1236,
      123514, 13264, 5172163, 13261, 12313, 1236146, 1237146, 1275124, 712317,
      124556, 12346, 13641, 12341, 1246123, 1461523, 42342386, 1361426,
      247235205, 247192847, 234734701481, 23472678, 1237124897, 2306, 3233,
      3658, 7463, 7881, 1266, 1790, 6685, 8171, 8439, 2169, 4518, 5709, 9023,
      9173, 3162, 6548, 8249, 8738, 9963, 1781, 2494, 3901, 7740, 9210, 869,
      1300, 5781, 7942, 8584, 661, 5773, 5840, 8960, 9272, 789, 2232, 2428,
      5379, 9193, 617, 2599, 5624, 6108, 7045, 2290, 4630, 5338, 8997, 9874,
    ]);
    expect(res).toBe(1);
  });
});
