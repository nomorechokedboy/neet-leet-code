pub fn count_prime(n: i32) -> i32 {
    let mut count: i32 = 0;
    if n < 2 {
        return count;
    }
    let mut sieve = vec![0; n.try_into().unwrap()];
    println!("{sieve:#?}");
    sieve[0] = 1;
    sieve[1] = 1;
    let len = sieve.len();

    for i in 2..len {
        if sieve[i] == 0 {
            count += 1;
            for j in (i.pow(2)..len).step_by(i) {
                sieve[j] = 1;
            }
        }
    }

    count
}

#[cfg(test)]
mod tests {
    use crate::problem::math::count_prime::count_prime;
    #[test]
    fn test_case1() {
        let result = count_prime(10);
        assert_eq!(result, 4);
    }

    #[test]
    fn test_case2() {
        let result = count_prime(1);
        assert_eq!(result, 0);
    }

    #[test]
    fn test_case3() {
        let result = count_prime(0);
        assert_eq!(result, 0);
    }

    #[test]
    fn test_case4() {
        let result = count_prime(100);
        assert_eq!(result, 25);
    }

    #[test]
    fn test_case5() {
        let result = count_prime(2);
        assert_eq!(result, 0);
    }
}
