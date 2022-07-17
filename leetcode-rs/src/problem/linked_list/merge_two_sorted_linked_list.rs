use crate::problem::linked_list::list_node::ListNode;

pub fn merge_two_lists(
    mut list1: Option<Box<ListNode>>,
    mut list2: Option<Box<ListNode>>,
) -> Option<Box<ListNode>> {
    let mut dummy: Option<Box<ListNode>> = Some(Box::new(ListNode::new(0)));
    let mut head = dummy.as_mut().unwrap();

    while let (Some(iter1), Some(iter2)) = (list1.as_mut(), list2.as_mut()) {
        if iter1.val < iter2.val {
            head.next = Some(Box::new(ListNode::new(iter1.val)));
            head = head.next.as_mut().unwrap();
            list1 = iter1.next.take();
            continue;
        }

        head.next = Some(Box::new(ListNode::new(iter2.val)));
        head = head.next.as_mut().unwrap();
        list2 = iter2.next.take();
    }

    if let Some(iter1) = list1 {
        head.next = Some(iter1);
    }

    if let Some(iter2) = list2 {
        head.next = Some(iter2);
    }

    dummy.unwrap().next
}

#[cfg(test)]
mod tests {
    use crate::problem::linked_list::list_node::ListNode;
    use crate::problem::linked_list::merge_two_sorted_linked_list::merge_two_lists;

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
        let list1 = Some(Box::new(node1));
        let node5 = ListNode::new(6);
        let mut node4 = ListNode::new(5);
        node4.next = Some(Box::new(node5));
        let mut node3 = ListNode::new(4);
        node3.next = Some(Box::new(node4));
        let mut node2 = ListNode::new(2);
        node2.next = Some(Box::new(node3));
        let mut node1 = ListNode::new(1);
        node1.next = Some(Box::new(node2));
        let list2 = Some(Box::new(node1));

        let tail = ListNode::new(6);
        let mut node1 = ListNode::new(5);
        node1.next = Some(Box::new(tail));
        let mut node2 = ListNode::new(5);
        node2.next = Some(Box::new(node1));
        let mut node3 = ListNode::new(4);
        node3.next = Some(Box::new(node2));
        let mut node4 = ListNode::new(4);
        node4.next = Some(Box::new(node3));
        let mut node5 = ListNode::new(3);
        node5.next = Some(Box::new(node4));
        let mut node6 = ListNode::new(2);
        node6.next = Some(Box::new(node5));
        let mut node6_dup = ListNode::new(2);
        node6_dup.next = Some(Box::new(node6));
        let mut node7 = ListNode::new(1);
        node7.next = Some(Box::new(node6_dup));
        let mut expected = ListNode::new(1);
        expected.next = Some(Box::new(node7));
        let expected = Some(Box::new(expected));

        let merged = merge_two_lists(list1, list2);
        assert_eq!(merged, expected);
    }
}
