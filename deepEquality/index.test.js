/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * isDeepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * isDeepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures and the keys order.
 *
 */

 function isDeepEquals(obj1, obj2) {
	// TO DO
	if(obj1 === null ) return false
	if(obj1 === undefined || obj2 === undefined) return false
	let str1 = JSON.stringify(obj1)
	let str2 = JSON.stringify(obj2)
	for (let index = 0; index < str1.length; index++) {
		if(str1[index] !== str2[index]) {
			return false
		}
	}
	return true
}


describe('Tests', () => {
  const mockObj = {
    a: 1,
    b: {
      c: 3,
    },
  };

  it('test isDeepEquals #case1', () => {
    const result = isDeepEquals(null, {});
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case2', () => {
    const result = isDeepEquals();
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case3', () => {
    const result = isDeepEquals(mockObj, mockObj);
    expect(result).toEqual(true);
  });

  it('test isDeepEquals #case4', () => {
    const result = isDeepEquals(null, null);
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case5', () => {
    const result = isDeepEquals(mockObj, {...mockObj,
      b: {
        c: '3',
      },
    });
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case6', () => {
    const result = isDeepEquals(mockObj, {...mockObj,
      b: {
        c: 6,
      },
    });
    expect(result).toEqual(false);
  });
});
