import { test, describe } from 'node:test';
import { strict as assert } from 'node:assert';

var fibonacci = function (n, memory = {}) {
    if(n in memory) return memory[n];
    if(n <= 2) return 1;
    
    memory[n] = fibonacci(n-1, memory) + fibonacci(n-2, memory);
    return memory[n];
    
}


test('should return 1 if number is 1', () => {
    assert.deepEqual(1, fibonacci(1));
})

test('should return 2 if number is 1', () => {
    assert.deepEqual(1, fibonacci(2));
})

test('should return 8 if number is 6', () => {
    assert.deepEqual(8, fibonacci(6));
})

test('should return 8 if number is 6', () => {
    assert.deepEqual(55, fibonacci(10));
})