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

#[cfg(test)]
mod tests {
    use crate::problem::dp::fibonacci::fib_memoized;
    use crate::problem::dp::fibonacci::fib_recursion;
    use crate::problem::dp::fibonacci::fib_tabulated;

    #[test]
    fn test_fib_tabulated() {
        let expected: u64 = 39088169;
        let tabulated = fib_tabulated(38);
        assert_eq!(tabulated, expected);
    }

    #[test]
    fn test_fib_memoized() {
        let mut memoized = [0; 100];
        let expected: usize = 39088169;
        let memoized = fib_memoized(38, &mut memoized);
        assert_eq!(memoized, expected);
    }
    #[test]
    fn test_fib_recursion() {
        let expected: i32 = 39088169;
        let recursion = fib_recursion(38);
        assert_eq!(recursion, expected);
    }
}
