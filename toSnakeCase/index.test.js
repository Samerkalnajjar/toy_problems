/**
 * Complete the method/function so that it converts dash/underscore delimited words or any type from camel casing to snake case
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

/**
 * Examples
  "theStealthWarrior"  gets converted to "the-stealth-warrior"
  "TheStealthWarrior"  gets converted to "The_Stealth_Warrior"
  [{ abcD: 1, user: { userId: 2 } }]  gets converted to [{ abc_d: 1, user: { user_id: 2 } }]
 */

  function toSnakeCase(arg){
    // return to do ...
    let newStr = ""

    if(typeof arg === 'string') {

      if(arg.length === 0) return "";

      for (let i = 0; i < arg.length; i++) {
        if(arg[i] === arg[i].toUpperCase() && i != 0) {
          let temp = arg[i].toLowerCase();
          newStr += '_';
          newStr += temp;
        } else if(i === 0){
          newStr = arg[i].toLowerCase();
        } else {
          newStr += arg[i];
        }
      }
      return newStr;
    }

    let newObjStr = Object.keys(arg).join();
    let obj = {}
    for (let i = 0; i < newObjStr.length; i++) {
      if(newObjStr[i] === newObjStr[i].toUpperCase() && i != 0) {
        let temp = newObjStr[i].toLowerCase();
        newStr += '_';
        newStr += temp;
      } else if(i === 0){
        newStr = newObjStr[i].toLowerCase();
      } else {
        newStr += newObjStr[i];
      }
    }
    obj[newStr] = Number(Object.values(arg).join())
    console.log(obj);

  }

  xdescribe("Tests", () => {
    it("test toSnakeCase", () => {
      expect(toSnakeCase('')).toStrictEqual('')
      expect(toSnakeCase("theStealthWarrior")).toStrictEqual("the_stealth_warrior")
      expect(toSnakeCase('TheStealthWarrior')).toStrictEqual('the_stealth_warrior')
      expect(toSnakeCase({ abcD: 1 })).toStrictEqual({ abc_d: 1 })
      expect(toSnakeCase([{ abcD: 1, user: {userId: 2} }])).toStrictEqual([{ abc_d: 1, user: {user_id: 2} }])
    });
  });