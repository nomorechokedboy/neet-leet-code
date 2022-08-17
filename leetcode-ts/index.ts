import { problem1 } from './problems/BuyMed';
import {
  addTwoNumber,
  deleteNode,
  ListNode,
  mergeTwoList,
  reorderList,
} from './problems/LinkedList';
import { generateListNode } from './test/helper';

const myLinkedList = new ListNode(
  1,
  new ListNode(3, new ListNode(5, new ListNode(7, null)))
);

const list2 = new ListNode(
  2,
  new ListNode(4, new ListNode(6, new ListNode(8, new ListNode(10, null))))
);

// console.log(removeElements(myLinkedList, 2));
const node1 = new ListNode(7, null);
const node2 = new ListNode(5, node1);
const node3 = new ListNode(3, node2);
const node4 = new ListNode(1, new ListNode(3, node2));
deleteNode(node3);

// console.log({ node4 });

// console.log(problem1([1, 2, 5, 3, 7, 9, 1, 2, 11, 14, 3, 4, 13]));
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  insert(root: TreeNode | null, val: number) {
    if (root === null) return new TreeNode(val);

    if (root.val < val) root.right = this.insert(root.right, val);
    else if (root.val > val) root.left = this.insert(root.left, val);

    return root;
  }

  printLevelOrder(root: TreeNode | null, res: string) {
    if (!root) {
      return '';
    }

    const queue: TreeNode[] = [];
    queue.push(root);
    while (queue.length != 0) {
      let tempNode = queue.shift();
      res += tempNode?.val + ' ';

      if (tempNode?.left != null) {
        queue.push(tempNode.left);
      }

      if (tempNode?.right != null) {
        queue.push(tempNode.right);
      }
    }

    return res;
  }

  invert(root: TreeNode | null) {
    if (root) {
      const left = this.invert(root.left);
      root.left = this.invert(root.right);
      root.right = left;
    }

    return root;
  }

  storeBSTNodes(root: TreeNode | null, nodes: TreeNode[]) {
    if (root == null) return;

    this.storeBSTNodes(root.left, nodes);
    nodes.push(root);
    this.storeBSTNodes(root.right, nodes);
  }

  buildTreeUtil(nodes: TreeNode[], start: number, end: number) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let node = nodes[mid];

    node.left = this.buildTreeUtil(nodes, start, mid - 1);
    node.right = this.buildTreeUtil(nodes, mid + 1, end);

    return node;
  }

  buildTree(root: TreeNode | null) {
    let nodes: TreeNode[] = [];
    this.storeBSTNodes(root, nodes);

    let n = nodes.length;
    return this.buildTreeUtil(nodes, 0, n - 1);
  }
}

const inputString = '2 1 3';
const res: string = '';
let root: TreeNode = new TreeNode(parseInt(inputString[0]));
inputString.split(' ').map((el) => {
  root.insert(root, parseInt(el));
});
root.invert(root);
// const newRoot = root.buildTree(root);
// if (newRoot)
//   console.log(newRoot.invert(newRoot)?.printLevelOrder(newRoot, res));

// console.log(root.printLevelOrder(root, res));

let merge = mergeTwoList(myLinkedList, list2);
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const l3 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
const l4 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
let result = addTwoNumber(
  // new ListNode(3, new ListNode(7)),
  // new ListNode(9, new ListNode(2))
  l3,
  l4
);
while (result) {
  console.log({ result });
  result = result.next;
}
