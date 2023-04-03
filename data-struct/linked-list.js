import { test, describe } from 'node:test';
import { strict as assert } from 'node:assert';

export class LinkedList {
    constructor() {
        this.nodes = []
    }

    get size() {
        return this.nodes.length
    }

    get head() {
        return this.size ? this.nodes[0] : null;
    }

    get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
    }

    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = { value, next: nextNode }
        if (previousNode) previousNode.next = node;
        this.nodes.splice(index, 0, node);
    }

    insertFirst(value) {
        this.insertAt(0, value);
    }

    insertLast(value) {
        this.insertAt(this.size, value);
    }

    getAt(index) {
        return this.nodes[index] || { value: null, next: null };
    }

    removeAt(index) {
        const previousNode = this.nodes[index - 1];
        const nextNode = this.nodes[index + 1] || null;

        if (previousNode) previousNode.next = nextNode;

        return this.nodes.splice(index, 1);
    }

    clear() {
        this.nodes = []
    }

    reverse() {
        this.nodes = this.nodes.reduce(
            (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
            []
        );
    }

    *[Symbol.iterator]() {
        yield* this.nodes;
    }

}


describe('linked list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertLast(4);
        list.insertAt(3, 5);
   

    test('should return 5 if call list.size', () => {
        assert.deepEqual(5, list.size);
    });

    test('should return 3 if call list.head.value', () => {
        assert.deepEqual(3, list.head.value);
    });

    test('should return 2 if call list.head.next.value', () => {
        assert.deepEqual(2, list.head.next.value);
    });

    test('should return 4 if call list.tail.value', () => {
        assert.deepEqual(4, list.tail.value);
    });

    test('should return [3, 2, 1, 5, 4] if exec foreach in list', () => {
        assert.deepEqual( [3, 2, 1, 5, 4], [...list].map(e => e.value));
    });

    test('should be with [3, 1, 5, 4] if call list.removeAt(1)', () => {
        list.removeAt(1)
        assert.deepEqual([3, 1, 5, 4], [...list].map(e => e.value));
    });

    test('should return 1 if call list.removeAt(1);  ', () => {
        assert.deepEqual(1, list.getAt(1).value);
    });

    test('should be with  [4, 5, 1, 3] if call list.reverse();', () => {
        list.reverse()
        assert.deepEqual([4, 5, 1, 3], [...list].map(e => e.value));
    });

    test('should be with size 0 if call list.clear();', () => {
        list.clear()
        assert.deepEqual(0,  list.size);
    });
    
})

