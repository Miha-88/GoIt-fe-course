"use strict";

const formatString = function(string) {
  let formatting = string.split("");
  const max = 40;

  if (formatting.length < max) {
    return string;
  } else if (formatting.length > max) {
    let newString;
    newString = formatting.splice(40);
    newString = formatting.splice(40, 0, "...");
    newString = formatting.join("");

    return newString;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
