
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

 const translateRomanNumeral = (romanNumeral)=> {
   // TO DO ...
   let num = 0;
   for (let index = 0; index < romanNumeral.length; index++) {
    if(romanNumeral[index] === "I") {
      if(romanNumeral[index+1] !== "I" && romanNumeral[index+1] !== undefined) {
        num-=1
        continue;
      }
      num += 1
    } else if(romanNumeral[index] === "I") {
      num += 5
    } else if(romanNumeral[index] === "V") {
      num += 5
    } else if(romanNumeral[index] === "X") {
      num += 10
    } else if(romanNumeral[index] === "L") {
      num += 50
    } else if(romanNumeral[index] === "C") {
      num += 100
    } else if(romanNumeral[index] === "D") {
      num += 500
    } else if(romanNumeral[index] === "M") {
      num += 1000
    }
   }

   return num;
  }

  describe("translateRomanNumeral", () => {
    it("XXI", () => {
      const romanNumeral = "XXI";
      expect(translateRomanNumeral(romanNumeral)).toEqual(21)
    })
  })
