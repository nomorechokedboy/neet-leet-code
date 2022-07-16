use crate::problem::linked_list::list_node::ListNode;

pub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut trail: Option<Box<ListNode>> = None;
    while let Some(mut node_box) = head {
        head = node_box.next;
        node_box.next = trail;
        trail = Some(node_box);
    }

    trail
}

#[cfg(test)]
mod tests {
    use crate::find_duplicate;
    use crate::problem::linked_list::reverse_linked_list::reverse_list;
    use crate::problem::linked_list::reverse_linked_list::ListNode;

    #[test]
    fn test_case() {
        let node5 = ListNode::new(5);
        let mut node4 = ListNode::new(4);
        node4.next = Some(Box::new(node5));
        let mut node3 = ListNode::new(3);
        node3.next = Some(Box::new(node4));
        let mut node2 = ListNode::new(2);
        node2.next = Some(Box::new(node3));
        let mut node1 = ListNode::new(1);
        node1.next = Some(Box::new(node2));
        let head = Some(Box::new(node1));
        let node5 = ListNode::new(1);
        let mut node4 = ListNode::new(2);
        node4.next = Some(Box::new(node5));
        let mut node3 = ListNode::new(3);
        node3.next = Some(Box::new(node4));
        let mut node2 = ListNode::new(4);
        node2.next = Some(Box::new(node3));
        let mut node1 = ListNode::new(5);
        node1.next = Some(Box::new(node2));
        let expected = Some(Box::new(node1));
        let reversed_head = reverse_list(head);
        assert_eq!(reversed_head, expected);
    }
}
