"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsItems = document.querySelector("ul#ingredients");

ingredients.forEach(text => {
    const item = document.createElement('li');
    item.textContent = text;
    ingredientsItems.appendChild(item);
})


