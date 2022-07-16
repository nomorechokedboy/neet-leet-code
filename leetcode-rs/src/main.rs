mod problem;
use problem::linked_list::find_the_duplicate_number::find_duplicate;

fn main() {
    let result = find_duplicate(vec![1, 3, 4, 2, 2]);
    println!("Breakpoint is: {result}");
}
