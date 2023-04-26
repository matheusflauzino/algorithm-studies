import { test } from 'node:test';
import { strict as assert } from 'node:assert';

var maxSubsequenceSum = function (elements) {
    let maxSum = elements[0];
    let currentSum = elements[0];

    for(let i = 1; i < elements.length; i++) {
        currentSum = Math.max(elements[i], currentSum + elements[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
    
}


test('should return 6 if elements is [-2, 1, -3, 4, -1, 2, 1, -5, 4]', () => {
    assert.deepEqual(6, maxSubsequenceSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
})


test('should return 6 if elements is [-2, 1, -3, 5, 6, 1, -1, 2 -5, 4]', () => {
    assert.deepEqual(12, maxSubsequenceSum([-2, 1, -3, 5, 6, 1, -1, 2 -5, 4]));
})
