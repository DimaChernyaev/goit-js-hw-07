import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElement = document.querySelector('.gallery');

galleryElement.addEventListener('click', demonstrationGallaryImg)

function creatGallerry(gallery) {

    return gallery.map(({preview, original, description}) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </li>`).join('')
}

const galleryMarcup = creatGallerry(galleryItems);
galleryElement.insertAdjacentHTML('beforeend', galleryMarcup);

function demonstrationGallaryImg(event) {
    event.preventDefault();

    const {target} = event;

    if (!target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(
        `<img src="${target.dataset.source}" width="800">`,
    {   
        closable: true,
		onShow: (instance) => {document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape'){
                instance.close()
            }
        })},
	}
    )
instance.show()
}


