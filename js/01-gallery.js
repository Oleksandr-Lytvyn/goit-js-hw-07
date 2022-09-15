import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const markupFromArr = galleryItems.map((elem) => {
    const {preview, original, description } = elem
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
})
const markupFromArrString = markupFromArr.join("")
let modalLightbox = {};
galleryRef.insertAdjacentHTML("afterbegin", markupFromArrString);
galleryRef.addEventListener('click', onGalleyClick)

function onGalleyClick (event) {
    event.preventDefault();
    
    const {target} = event;
    if (target.nodeName !== 'IMG') {
        return
    }
    const urlOriginalImg = target.parentNode.href
    const altOriginalImg = target.alt
    modalLightbox = basicLightbox.create(`
    <img src="${urlOriginalImg}" width="800" height="600" alt="${altOriginalImg}">
`)
modalLightbox.show()
window.addEventListener('keydown', onPressEsc)
}
function onPressEsc (event) {
  if(event.code !== 'Escape') {
    return
  }
  if(!modalLightbox.visible()) {
    return
  }
  modalLightbox.close()
}

