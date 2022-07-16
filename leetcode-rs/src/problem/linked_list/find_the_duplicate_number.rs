pub fn find_duplicate(nums: Vec<i32>) -> i32 {
    let mut slow1: i32 = 0;
    let mut fast: i32 = slow1;

    loop {
        slow1 = nums[slow1 as usize];
        fast = nums[nums[fast as usize] as usize];

        if slow1 == fast {
            break;
        }
    }

    let mut slow2: i32 = 0;
    loop {
        slow2 = nums[slow2 as usize];
        slow1 = nums[slow1 as usize];

        if slow1 == slow2 {
            break;
        }
    }

    slow2
}

#[cfg(test)]
mod tests {
    use crate::find_duplicate;

    #[test]
    fn test_case() {
        let case1 = find_duplicate(vec![1, 3, 4, 2, 2]);
        let case2 = find_duplicate(vec![3, 1, 3, 4, 2]);
        assert_eq!(case1, 2);
        assert_eq!(case2, 3);
    }
}
