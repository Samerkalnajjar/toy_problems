/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO
/**
 * Sort an array
 * @return {Array}      sorted array
 */
Array.prototype.sort = function() {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if(this[j] < this[i]) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
/**
 * Get the first element
 * @return {Number}      first element
 */
Array.prototype.firstElement = function() {
    return this[0];
}
/**
 * Get the last element
 * @return {Number}      last element
 */
Array.prototype.lastElement = function() {
    return this[this.length - 1];
}
/**
 * Search for a value
 * @param  {Any} value value
 * @return {boolean}      true or false
 */
Array.prototype.search = function(value) {
    for (let index = 0; index < this.length; index++) {
        console.log('LOLO', this[index]);
        if(this[index] === value) {
            return true;
        }
    }
    return false
}

describe('custom functions', () => {
    it('sort function', () => {
        const result = new Array(2, 1);
        expect(result.sort()).toEqual([1, 2]);
    })
    it('get first element', () => {
        const result = new Array(2, 1);
        expect(result.firstElement()).toEqual(2);
    })
    it('get last element', () => {
        const result = new Array(2, 1);
        expect(result.lastElement()).toEqual(1);
    })
    it('search for value', () => {
        const result = new Array(2, 1);
        expect(result.search(1)).toEqual(true);
    })
})