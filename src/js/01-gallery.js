// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkup(galleryArray) {
    return galleryArray.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}" data-title='${description}'>
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
        </a>`
    }).join('');
}
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems))

let galleryImage = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData:'alt',
    captions: true,
    captionDelay: 250
});

galleryImage.on('error.simplelightbox', function (e) {
    console.log(`err element- ${e.target} type ERR- ${e.type}`); // some usefull information
});


