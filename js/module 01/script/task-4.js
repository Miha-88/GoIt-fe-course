"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let input = prompt("Какое количество дроидов хотите купить?");

let message;

if (input === null) {
  message = "Отменено пользователем!";
} else {
  let totalPrice = pricePerDroid * input;
  if (totalPrice <= credits) {
    message = `Вы купили ${input} дроидов, на счету осталось ${credits -
      totalPrice} кредитов. `;
  } else {
    message = "Недостаточно средств на счету!";
  }
}

alert(message);
