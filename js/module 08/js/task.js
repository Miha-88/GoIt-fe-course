"use strict";

import gallery from "./gallery-items.js";

const galleryGrid = document.querySelector("ul.js-gallery");
const modalWindow = document.querySelector("div.js-lightbox");
const modalWindowButton = document.querySelector("button.lightbox__button");
const currentImage = document.querySelector(".lightbox__image");
const overlayArea = document.querySelector("div.lightbox__content");
const galleryItems = gallery
  .map((galleryItem) => createGalleryElement(galleryItem))
  .join("");
const galleryItemOrig = gallery.map((item) => item.original);

galleryGrid.addEventListener("click", openModal);

appendGalleryElement(galleryGrid, galleryItems);

function createGalleryElement(e) {
  return `
<li class="gallery__item">
  <a class="gallery__link"
    href="${e.original}">
    <img
      class="gallery__image"
        src="${e.preview}"
        data-source="${e.original}"
        data-index="${e.index}"
        data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</li>
 `;
}

function appendGalleryElement(parentRef, galleryEl) {
  parentRef.insertAdjacentHTML("beforeend", galleryEl);
}

const links = document.querySelectorAll(".gallery__image");

links.forEach((item, index) => {
  item.setAttribute("data-index", index);
});

function openModal(e) {
  e.preventDefault();
  modalWindow.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModal);
  document.addEventListener("keydown", moveImage);

  if (e.target === e.currentTarget) {
    return;
  }
  modalWindow.classList.add("is-open");

  galleryItemOrig.find((item, index) => {
    if (item === e.target.dataset.source) {
      currentImage.srcset = item;
      currentImage.dataset.index = index;
    }
  });
}

function closeModal(e) {
  if (
    e.target === modalWindowButton ||
    e.target === "Escape" ||
    e.target === overlayArea
  ) {
    modalWindow.classList.remove("is-open");
    modalWindow.removeEventListener("click", closeModal);
    currentImage.srcset = "";
  }
}

function moveImage(e) {
  let currentIndex = galleryItemOrig.findIndex(
    (item) => item === currentImage.srcset
  );

  if (e.code === "ArrowRight") {
    if (currentIndex < galleryItemOrig.length - 1) {
      currentImage.srcset = galleryItemOrig[currentIndex + 1];
    }
  }

  if (e.code === "ArrowLeft") {
    if (currentIndex > 0) {
      currentImage.srcset = galleryItemOrig[currentIndex - 1];
    }
  }
}
