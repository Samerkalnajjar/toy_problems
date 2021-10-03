/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

//  Unit testing:

test("“Happy Path” - Expected outcome", () => {
  expect(balancedParens("{}(){}")).toBeTruthy();
})

test("Expected failure", () => {
  expect(balancedParens("{}({}")).toBeFalsy();
})

test("Edge case", () => {
  expect(balancedParens("")).toEqual("Please enter a valid string");
})

 function balancedParens(input) {
  //  TO DO
  if(input === "") return "Please enter a valid string";

  let Parentheses = 0;
  let Bracket = 0;
  let CurlyBracket = 0;

  for (let i = 0; i < input.length; i++) {
    if("(" === input[i]) {
      Parentheses++;
    } else if(")" === input[i]) {
      Parentheses++;
    } else if("[" === input[i]) {
      Bracket++;
    } else if("]" === input[i]) {
      Bracket++;
    } else if("{" === input[i]) {
      CurlyBracket++;
    } else if("}" === input[i]) {
      CurlyBracket++;
    }
  }


  if(Parentheses > 0 ||  Bracket > 0 || CurlyBracket > 0) {
    if(Parentheses % 2 === 0 && Bracket % 2 === 0 && CurlyBracket % 2 === 0) {
      return true;
    }
  } else {
    return false
  }
    return false
}
