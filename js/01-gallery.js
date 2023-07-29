import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const markup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markup);
galleryContainer.addEventListener('click', onImgHandler);

// rendered 
function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join('');
}

function onImgHandler(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
const img = event.target;
const currentActiveImgUrl = img.dataset.source;  
const isActiveImage = img.classList.contains('gallery__image');
  if (!isActiveImage) {
    return
   }

const instance = basicLightbox.create(
  `<img src="
 ${currentActiveImgUrl}" 
 width="1280"
 height="auto"/>`, {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscapeKeyPress);
     },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscapeKeyPress);
     },
   }
);

  instance.show();

function onEscapeKeyPress(event) {
const ESC_KEY_CODE = 'Escape';
const isEscapeKey = event.code === ESC_KEY_CODE;
  
   if (!isEscapeKey) {
       return
     }
    instance.close();
  }
 }

