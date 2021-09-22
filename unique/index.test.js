/**
 * Given a single input array, write a function that outputs an unique array of values
 *
 *
 * What time complexity is your solution?
 *
 * Your solution shouldn't using any build in function.
 *
 * Credit: Write a unit tests.
 */

/**
  * example usage:
  * const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
  * console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
  */
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

const getUniqueValues = (arrOfNum) => {
  // TO DO
  let obj = {}
  for (let index = 0; index < arrOfNum.length; index++) {
    if(!arrOfNum[index]) {
      obj[index] = 1
    }
  }

  let arr = Object.keys(obj);

  return arr
}
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]


describe("Tests", () => {
  it("test getUniqueValues", () => {
    expect(getUniqueValues([1, 2, 2, 4, 5, 6, 6])).toEqual([1, 2, 4, 5, 6])
  });
});