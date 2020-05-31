"use strict";

const categoriesItems = document.querySelectorAll("ul#categories > li.item");

console.log(`В списке ${categoriesItems.length} категории`);

const categoriesItemsInfo = [...categoriesItems]
  .map((el) => el.children)
  .filter((el) => {
    const categoriesName = el[0].textContent;
    const categoriesElementCount = el[0].nextElementSibling.children.length;
    console.log(`Категория: ${categoriesName}
Количество элементов: ${categoriesElementCount} `);
  });
