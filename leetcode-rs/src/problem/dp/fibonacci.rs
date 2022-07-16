pub fn fib_tabulated(n: usize) -> u64 {
    let mut table = vec![0; n + 1];
    table[1] = 1;
    for i in 2..n + 1 {
        table[i] = table[i - 1] + table[i - 2]
    }

    return table[n];
}

pub fn fib_memoized(n: usize, memoized: &mut [usize]) -> usize {
    if memoized[n] == 0 {
        if n < 2 {
            memoized[n] = n;
        } else {
            memoized[n] = fib_memoized(n - 1, memoized) + fib_memoized(n - 2, memoized);
        }
    }

    return memoized[n];
}

pub fn fib_recursion(n: i32) -> i32 {
    if n < 2 {
        return n;
    };

    fib_recursion(n - 1) + fib_recursion(n - 2)
}

pub fn test_fib() {
    let mut memoized = [0; 100];
    let expected64: u64 = 39088169;
    let expected_usize: usize = 39088169;
    let expected_i32: i32 = 39088169;

    let recursion = fib_recursion(38);
    let tabulated = fib_tabulated(38);
    let memoized = fib_memoized(38, &mut memoized);

    assert_eq!(recursion, expected_i32);
    assert_eq!(tabulated, expected64);
    assert_eq!(memoized, expected_usize);
}
