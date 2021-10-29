import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);

import { galleryItems } from './gallery-items';
console.log(galleryItems);

import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector('.gallery');

const galleryItemsString = galleryItems.map(item => 
  `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsString);

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250,
});