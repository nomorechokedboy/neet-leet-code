use crate::problem::linked_list::list_node::ListNode;

pub fn add_two_numbers(
    mut l1: Option<Box<ListNode>>,
    mut l2: Option<Box<ListNode>>,
) -> Option<Box<ListNode>> {
    let mut dummy: Option<Box<ListNode>> = Some(Box::new(ListNode::new(0)));
    let mut head: &mut Box<ListNode> = dummy.as_mut().unwrap();
    let mut carry: i32 = 0;

    while l1.is_some() || l2.is_some() || carry > 0 {
        if let Some(node1) = l1.as_mut() {
            carry += node1.val;
            l1 = node1.next.take();
        }

        if let Some(node2) = l2.as_mut() {
            carry += node2.val;
            l2 = node2.next.take();
        }

        let mut node = ListNode::new(carry % 10);
        head.next = Some(Box::new(node));
        head = head.next.as_mut().unwrap();
        carry = carry / 10;
    }

    println!("{:#?}", dummy.as_mut().unwrap().next);

    dummy.unwrap().next
}

#[cfg(test)]
mod tests {
    use crate::problem::linked_list::add_two_numbers::add_two_numbers;
    use crate::problem::linked_list::list_node::ListNode;

    #[test]
    fn test_case() {
        let node1 = Some(Box::new(ListNode::new(1)));
        let mut node2 = ListNode::new(2);
        node2.next = node1;
        let mut list1 = ListNode::new(3);
        list1.next = Some(Box::new(node2));

        let node1 = Some(Box::new(ListNode::new(3)));
        let mut node2 = ListNode::new(2);
        node2.next = node1;
        let mut list2 = ListNode::new(3);
        list2.next = Some(Box::new(node2));

        let node1 = Some(Box::new(ListNode::new(4)));
        let mut node2 = ListNode::new(4);
        node2.next = node1;
        let mut expected = ListNode::new(6);
        expected.next = Some(Box::new(node2));
        let mut expected = Some(Box::new(expected));

        let result = add_two_numbers(Some(Box::new(list1)), Some(Box::new(list2)));
        assert_eq!(expected, result);
    }
}
