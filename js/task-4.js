function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
// console.log(pow(2, 1)); // 2
// console.log(pow(2, 2)); // 4
// console.log(pow(2, 3)); // 8
console.log(pow(2, 4)); //16

// let students = {
//   js: [
//     {
//       name: 'John',
//       progress: 100,
//     },
//     {
//       name: 'Ivan',
//       progress: 60,
//     },
//   ],
//   html: {
//     basic: [
//       {
//         name: 'Peter',
//         progress: 20,
//       },
//       {
//         name: 'Ann',
//         progress: 18,
//       },
//     ],
//     pro: [
//       {
//         name: 'Sam',
//         progress: 10,
//       },
//     ],
//   },
// };
// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;
//   for (const course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;
//       // for (let i = 0; i < course.length; i++){
//       //   total += course[i].progress;
//       // }
//       for (const student of course) {
//         total += student.progress;
//         console.log(student.progress);
//        }
//     } else {
//       for (const subCourse of Object.values(course)) {
//         students += subCourse.length;
//          for (let i = 0; i < subCourse.length; i++){
//         total += subCourse[i].progress;
//       }
//     }
//     }
//   }

//   return total / students;
// }
// console.log(getTotalProgressByIteration(students));
///////////
// function getTotalProgressByRecursion(data) {
//   if (Array.isArray(data)) {
//     let total = 0;
//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }
//       return [total, data.length];
//     } else {
//       let total = [0, 0];

//       for (let subData of Object.values(data)) {
//         const subDataArr = getTotalProgressByRecursion(subData);
//         total[0] += subDataArr[0];
//         total[1] += subDataArr[1];
//       }
//       return total;
//     }
//   }
// const result = getTotalProgressByRecursion(students);
// console.log(result[0] / result[1]);

// function factorial(value) {
//   let result = 1;
//   if (value !== 'number' && !Number.isInteger(value)) {
//     return `Input integer number`;
//   } else if (value <= 0) {
//     return result;
//   } else {
//     // for (let i = 0; i < value; i++) {

//       // console.log(result);
//       // result *= (value - i);
//       // console.log(result);
//     // }
//     result = value * factorial(value - 1);
//     return result;
//   }
// }
// console.log(factorial(3));

// function factorial(n) {
//   if (typeof n !== 'number' || !Number.isInteger(n)) {
//     return 'Ошибка, проверьте данные';
//   }

//   if (n >= 1) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }

//   // Более короткий вариант, который вы можете встретить
//   // Но не учитывает отрицательные значения
//   return n ? n * factorial(n - 1) : 1;
// }

// factorial(5);
// console.log(String(-3).length);

// function multiply(number) {
//   //your code here
// console.log(Math.abs(number));
//   return number * 5 ** Math.abs(number).toString(number).length;
// }
// console.log(multiply(-3));

function multiplyByFiveRaisedToDigits(number) {
//   let power = number < 0 ? String(number * -1).length : String(number).length;
  //   let power = (number < 0) ? (number * -1).toString().length : number.toString().length;
  let power = number < 0 ? Math.abs(number).toString().length : number.toString().length;
  // console.log(String(number * -1).length);
  return number * 5 ** power;
}

console.log(multiplyByFiveRaisedToDigits(3)); // Output: 15
console.log(multiplyByFiveRaisedToDigits(10)); // Output: 250
console.log(multiplyByFiveRaisedToDigits(200)); // Output: 25000
console.log(multiplyByFiveRaisedToDigits(0)); // Output: 0
console.log(multiplyByFiveRaisedToDigits(-3)); // Output: -15
