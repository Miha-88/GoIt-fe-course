"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryItems = document.querySelector("#gallery");

const img = document.createElement("img");

images.forEach((el) => {
  let li = document.createElement("li");
  img.src = el.url;
  img.alt = el.alt;

  li.insertAdjacentHTML("afterbegin", `<img src="${el.url}" alt="${el.alt}">`);
  galleryItems.appendChild(li);
});

const list = document.querySelector("#gallery");
list.classList.add("list");

const listItem = document.querySelectorAll("#gallery > li");
listItem.forEach((el) => {
  el.classList.add("list-item");
});
