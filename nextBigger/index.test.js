// /*
// You have to create a function
// that takes a positive integer number and returns the
// next bigger number formed by the same digits:

// Exanmples:
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:
// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1
// */
// //153 = 315

// const nextBigger = function(num) {
// //   const length = num.toString().length;
// //   let arr = [];
// //   for (let index = 0; index < length; index++) {
// //     arr.push(num % 10)
// //   }
// let str = num.toString();
// let arr = [];
// let incr = 10;
// for (let index = 0; index < str.length; index++) {
//     let temp = num % incr; // 3
//     if(temp > 10) temp = Math.floor(temp / (incr/10))
//     let temp2 = Math.floor((num % (incr * 10)) / incr) //5

//     if(temp2 < temp) {
//         // let temp3 =
//     }
//     incr *= 10;
// }
// let temp = num % 10;
// let temp2 = (num % 100).toString();
// // if(temp > Number(temp2[0]) {
// //     // let test =
// // }
// };

// temp = 3, 5
// temp2 = 5, 1