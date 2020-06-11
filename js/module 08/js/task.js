"use strict";

import gallery from "./gallery-items.js";

const galleryGrid = document.querySelector(".gallery");
const modalWindow = document.querySelector(".lightbox");
const currentImage = document.querySelector(".lightbox__image");

let galleryItems = "";

gallery.forEach((images) => {
  galleryItems += `<li class="gallery__item"><a class="gallery__link" href="${images.original}"
><img class="gallery__image"
src="${images.preview}" data-source="${images.original}" alt="${images.description}"/>
</a></li>`;
});

galleryGrid.insertAdjacentHTML("afterbegin", galleryItems);
galleryGrid.addEventListener("click", (event) => {
  event.preventDefault();
  const image = event.target;
  if (image.matches("img")) {
    modalWindow.classList.add("is-open");
    currentImage.setAttribute("src", image.dataset.source);
  }
});

const modalWindowButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);
modalWindowButton.addEventListener("click", () => {
  modalWindow.classList.remove("is-open");
  currentImage.setAttribute("src", "");
});
