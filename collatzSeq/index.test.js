/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/**
 * Wiki link
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 */

/**
 * What is the time complexity for your solution ?
 */

// time complexity: O(n)

/**
 * Write the unit tests that cover your solution
 */

describe('should return the highest chain', () => {
    it('test', () => {
        const result = collatzSeq(999995);
        expect(result).toEqual(259);
    })
})

function collatzSeq (number = 999999) {
    // TO DO
    let arr = [];
    while(number !== 1){
        if(number % 2 == 0){
            number = parseInt(number / 2);
            arr.push(number);
        }else{
            number = (number * 3) + 1;
            arr.push(number);
        }
    }
    if(number === 1) {
        arr.push(number)
    }
    return arr.length;
}
