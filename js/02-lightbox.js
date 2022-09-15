import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markupFromArr = galleryItems.map((elem) => {
    const {preview, original, description } = elem
    return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  </div>`
})
const markupFromArrString = markupFromArr.join("")
galleryRef.insertAdjacentHTML("afterbegin", markupFromArrString);


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'top',
    captionType: 'attr',
    captionSelector: '.gallery__image',
    captionDelay:	250,
    showCounter: false,
    
 });

