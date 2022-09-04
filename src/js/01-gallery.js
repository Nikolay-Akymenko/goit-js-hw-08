// Add imports above this line
import Simplelightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
             />
         </a>
    
    `;
    })
    .join('');
}
    
   new SimpleLightbox('.gallery a', {
        nav: true,
        close: true,
        caption: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        captionSpeed: 250,
        
   });

console.log(galleryItems);
