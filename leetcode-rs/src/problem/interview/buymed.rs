pub fn problem1(array: &Vec<u8>) -> &[u8] {
    let mut len = 1;
    let mut max = 1;
    let mut max_idx = 0;
    let vec_len = array.len();

    for i in 0..vec_len {
        if i == 0 {
            continue;
        }
        if array[i] > array[i - 1] {
            len += 1;
        } else {
            if max < len {
                max = len;
                max_idx = i - max;
            }
            len = 1;
        }
    }
    if max < len {
        max = len;
        max_idx = vec_len - max;
    }

    &array[max_idx..max_idx + max]
}

pub fn problem1_test_case() {
    assert_eq!(
        problem1(&vec![1, 2, 5, 3, 7, 9, 1, 2, 11, 14, 3, 4, 13]),
        [1, 2, 11, 14]
    );

    assert_eq!(
        problem1(&vec![3, 1, 2, 43, 5, 123, 12, 64, 23, 34, 5, 1, 2]),
        [1, 2, 43]
    );
}
