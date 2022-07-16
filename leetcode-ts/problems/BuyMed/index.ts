export const problem1 = (arr: number[]): number[] => {
  /**
   * max is for tracking max subarray length
   * len is for tracking the length of current subarray length
   * maxIndex is for tracking the index of current max subarray length
   */

  let max = 1,
    len = 1,
    maxIndex = 0,
    arrLen = arr.length;

  //We will iterate throught the array
  for (let i = 0; i < arrLen; i++) {
    //Increase length of the current subarray if it continue to increase
    if (arr[i] > arr[i - 1]) {
      len++;
    }
    //Reset the length of current subarray and check whether to assign new max subarray length
    else {
      console.log({ max, len, element: arr[i] });

      if (max < len) {
        max = len;
        maxIndex = i - max;
        console.log("Else happen");
        console.log({
          maxIndex,
          max,
          len,
          test: arr[0 - 1],
        });
      }
      len = 1;
    }
  }

  //Compare the last subarray length with max
  if (max < len) {
    max = len;
    maxIndex = arrLen - max;
    console.log({ max, len, maxIndex, test: arr[0 - 1] });
  }

  return arr.slice(maxIndex, maxIndex + max);
};

export const problem2 = (string1: string, string2: string) => {
  //Initial an 2D array. Ex:
  /**
   *    L O V E R
   * P  0 0 0 0 0
   * O  0 0 0 0 0
   * W  0 0 0 0 0
   * E  0 0 0 0 0
   * R  0 0 0 0 0
   */
  const str1Len = string1.length;
  const str2Len = string2.length;
  const matrix = Array.from(Array(str1Len), (_) => Array(str2Len).fill(0));
  const minStr =
    string1.length < string2.length ? string1.length : string2.length;
  let len = 0;

  for (let i = 0; i < str1Len; i++) {
    for (let j = 0; j < str2Len; j++) {
      if (string1[i] !== string2[j]) continue;

      //If string1 character is matched with string2 character then we will assign matrix[i][j] = a number and increase if it continue match
      matrix[i][j] = i === 0 || j === 0 ? 1 : 1 + matrix[i - 1][j - 1];
      if (matrix[i][j] > len) {
        len = matrix[i][j];
      }
    }
  }

  let maxDiagonalLeft = Number.MIN_VALUE;
  let maxDiagonalRight = Number.MIN_VALUE;

  for (let i = str1Len - 1; i >= 0; i--) {
    const row: string[] = [];
    for (let j = i - Math.abs(str1Len - str2Len); j >= 0; j--) {
      row.push(matrix[i][j]);
    }

    console.log({ row });
  }
  // for (let i = str1Len; i >= 0; i--) {
  //   // if(maxDiagonalRight < matrix[i][i - 1])
  //   console.log({ rightDiagonal: matrix[i][ - 1]});
  // }

  /**
   * The final matrix will look like this
   *    L O V E R
   * P  0 0 0 0 0
   * O  0 1 0 0 0
   * W  0 0 0 0 0
   * E  0 0 0 1 0
   * R  0 0 0 0 2
   */

  // return ((100 * (len + maxDiagonalLeft)) / minStr).toFixed(0);
  console.log({ matrix });

  return len + maxDiagonalLeft;
};

// console.log(problem2("FOOTBALL", "FOOD HALL"));
// console.log(problem2("LOVER", "POWER"));
// console.log(problem2("eatsleepnightxyz", "eatsleepabcxyz"));
