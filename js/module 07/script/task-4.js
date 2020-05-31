"use strict";

const buttonPlus = document.querySelector('button[data-action="increment"]');
buttonPlus.addEventListener("click", incrementFn);

const buttonMinus = document.querySelector('button[data-action="decrement"]');
buttonMinus.addEventListener("click", decrementFn);

const counterField = document.querySelector("#value");

let counterValue = 0;

function incrementFn() {
  counterValue++;
  counterField.textContent = counterValue;
  console.log("Increased");
}

function decrementFn() {
  counterValue--;
  counterField.textContent = counterValue;
  console.table("Decreased");
}
