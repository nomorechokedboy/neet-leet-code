export const smallestDifferent = (nums: number[]) => {
  const sorted = nums.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  sorted.reduce((prev, curr) => {
    const different = Math.abs(prev - curr);
    if (different < min) min = different;

    return curr;
  });

  return min;
};
