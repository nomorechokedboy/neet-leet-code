mod problem;
use crate::problem::math::count_prime::count_prime;
use problem::linked_list::find_the_duplicate_number::find_duplicate;

fn main() {
    let result = find_duplicate(vec![1, 3, 4, 2, 2]);
    let test = count_prime(2);
    println!("test: {test}");
    println!("Breakpoint is: {result}");
}
