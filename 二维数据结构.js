//四行八列数组
let arr = new Array(4)
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(8)
}
console.log(arr)


// 二维拓部结构
function Node(value) {
    this.value = value
    this.neighbor = []
}

let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")

a.neighbor.push(b)
a.neighbor.push(c)
a.neighbor.push(d)
b.neighbor.push(a)
b.neighbor.push(d)
b.neighbor.push(e)
c.neighbor.push(f)

console.log(a, b, c)
