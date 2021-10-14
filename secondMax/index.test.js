/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:

Note : using sort native is not allowed

Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/

const secondMax = function(array) {
  // TODO
  let max = array[0];
  let secondMax = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (secondMax < array[i] && array[i] !== max) {
      secondMax = array[i];
    }
  }
  return secondMax;
};


describe('secondMax functions', () => {
  it('steps are positive', () => {
    expect(secondMax([1, 5, 2])).toEqual(2);
  });
  it('steps are negative', () => {
    expect(secondMax([-1, -5, 2])).toEqual(-1);
  });
});
