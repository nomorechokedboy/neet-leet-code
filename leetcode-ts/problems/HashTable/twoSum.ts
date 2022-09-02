export function twoSum(nums: number[], target: number): number[] {
  const map: { [num: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[target - nums[i]] = i;

      continue;
    }

    return [i, map[nums[i]]];
  }

  throw Error('No result');
}
