import { countPrime } from '../../problems/Math';

describe('Test case for countPrime', () => {
  it('Should return 4 when n = 10', () => {
    const result = countPrime(10);
    expect(result).toBe(4);
  });

  it('should return 0 when n = 0', () => {
    const result = countPrime(0);
    expect(result).toBe(0);
  });

  it('should return 0 when n = 1', () => {
    const result = countPrime(1);
    expect(result).toBe(0);
  });

  it('Should return 25 when n = 100', () => {
    const result = countPrime(100);
    expect(result).toBe(25);
  });
});
