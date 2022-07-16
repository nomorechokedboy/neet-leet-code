mod problem;
use problem::dp::fibonacci::test_fib;
use problem::interview::buymed::problem1_test_case;
use problem::linked_list::reverse_linked_list::test_reverse_list;

fn main() {
    problem1_test_case();
    test_fib();
    test_reverse_list();
}
