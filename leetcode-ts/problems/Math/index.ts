export const countPrime = (n: number): number => {
  const sieve = new Uint8Array(n);
  let count = 0;
  n > 2 && ((sieve[0] = 1), (sieve[1] = 1));

  sieve.forEach((num, i) => {
    // if (num === 0) {
    // count++;
    for (let j = i ** 2; j <= n; j += i) console.log(j);
    // }
  });
  // for (let i = 2; i < n; i++) {
  //   if (sieve[i] === 0) {
  //     count++;

  //     for (let j = i ** 2; j <= n; j += i) sieve[j] = 1;
  //   }
  // }

  console.log({ sieve });

  return count;
};
