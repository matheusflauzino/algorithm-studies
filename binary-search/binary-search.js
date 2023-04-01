import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {array} list
 * @param {number} item
 * @return {number} index
 */
var binarySearch = function (list, item) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const kick = list[middle];

        if (kick === item)
            return middle;
        if (kick > item)
            high = middle - 1;
        else low = middle + 1;
    }

    return -1;

};
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));

test('should return 4 if input is list = [1,2,3,4,5,6] and item = 5', () => {
    assert.deepEqual(4, binarySearch([1,2,3,4,5,6],5));
})

test('should return 2 if input is list = [2,4,6,8,10,20,30,40,50,100] and item = 6', () => {
    assert.deepEqual(2, binarySearch([2,4,6,8,10,20,30,40,50,100],6));
})

test('should return -1 if input is list = [2,4,6,8,10,20,30,40,50,100] and item = 11', () => {
    assert.deepEqual(-1, binarySearch([2,4,6,8,10,20,30,40,50,100],11));
})
