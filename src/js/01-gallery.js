// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsRef = document.querySelector(".gallery")

const galleryItemsLink = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        />
    </a>`).join(" ");


    galleryItemsRef.insertAdjacentHTML("afterbegin", galleryItemsLink);

    // === бібліотека окремо ===== simpleLightbox
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 })