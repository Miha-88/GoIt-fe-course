"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число!");
  numbers.push(Number(input));
  console.log(numbers);

  if (input === null) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}`);
  }
}

//========================================

// do {
//   input = prompt("Введите число!");
//   if (isNaN(input) === false) {
//     numbers.push(Number(input));
//     console.log(numbers);
//   } else {
//     alert("Было введено не число, попробуйте еще раз");
//   }
// } while (input !== null);
// {
//   numbers.push(Number(input));
//   if (input === null) {
//     for (const number of numbers) {
//       total += number;
//     }
//   }
// }

// console.log(`Общая сумма чисел равна ${total}`);
