"use strict";

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", changeInlineStyle);

function changeInlineStyle(event) {
  text.style.fontSize = `${input.value}px`;
}
