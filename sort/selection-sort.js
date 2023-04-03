import { test } from 'node:test';
import { strict as assert } from 'node:assert';


/**
 * @param {array} array
 * @return {number} index
 */
const selectionSort = function (array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }

    }

    return array;
};


test('should return [1,2,3,4,5] if input is array = [3, 1, 2, 4, 6, 5]', () => {
    assert.deepEqual([1,2,3,4,5],selectionSort([3, 1, 2, 4, 5]));
})

test('should return [1,2,3,4,5] if input is array = [5,4,3,2,1]', () => {
    assert.deepEqual([1,2,3,4,5],selectionSort([5,4,3,2,1]));
})

test('should return [1,2,3,4,5] if input is array = [5,1,4,2,3]', () => {
    assert.deepEqual([1,2,3,4,5],selectionSort([5,1,4,2,3]));
})

test('should return [1,2,3,4,5] if input is array = [1,2,3,4,5]', () => {
    assert.deepEqual([1,2,3,4,5],selectionSort([1,2,3,4,5]));
})

