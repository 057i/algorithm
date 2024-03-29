//双向链表的优点无论给出哪一个结点，都可以对整个链表进行遍历
//双向列表的缺点，多耗费一个引用空间，且构建比较复杂
function Node(value) {
    this.value = value
    this.next = null
    this.prev = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2
node2.prev = node1
node2.next = node3
node3.prev = node2
node3.next = node4
node4.next = node5
node5.prev = node4
