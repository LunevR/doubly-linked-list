const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null
        this._tail = null
        this.length = 0
    }

    append(data) {
        let node = new Node(data)

        if (this.length === 0) {
            this._head = node
            this._tail = node
        } else {
            let tail = this._tail

            node.prev = tail
            tail.next = node
            this._tail = node
        }

        this.length++

        return this
    }

    head() {
        return this._head.data
    }

    tail() {
        return this._tail.data
    }

    at(index) {
        let item = this._head

        for (let i = 1; i <= index; i++) {
            item = item.next
        }

        return item.data
    }

    insertAt(index, data) {
        let item = this._head

        for (let i = 0; i <= index; i++) {
            if (index === i) {
                let prev = item.prev
                let node = new Node(data)

                if (this.length > 1) {
                    node.prev = prev
                    node.next = item
                    prev.next = node
                }

                this.length++
            }

            item = item.next
        }

        return this
    }

    isEmpty() {
        return this.length === 0
    }

    clear() {
        this._head = new Node()
        this._tail = new Node()
        this.length = 0

        return this
    }

    deleteAt(index) {
        let item = this._head

        for (let i = 0; i <= index; i++) {
            if (index === i) {
                let prev = item.prev
                let next = item.next

                if (this.length > 1) {
                    item.prev.next = next
                    item.next.prev = prev
                }

                this.length--

                return this
            }

            item = item.next
        }

        return this
    }

    reverse() {
        let item = this._head
        let next = item.next

        for (let i = 0; i < this.length; i++) {
            next = item.next
            item.next = item.prev
            item.prev = next

            item = next
        }

        let head = this._head

        this._head = this._tail
        this._tail = head

        return this
    }

    indexOf(data) {
        let index = -1
        let item = this._head

        while (item) {
            index++

            if (item.data === data) {
                return index
            }

            item = item.next
        }

        return -1
    }
}

module.exports = LinkedList;
