import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryCardMarkup = createGalleryCards(galleryItems);

function createGalleryCards(images) {
    return images.map(image => 
        `<div class = "gallery__item">
            <a class = "gallery__link" href = "${image.original}" onclick = "return false">
            <img
                class = "gallery__image"
                src = "${image.preview}"
                data-source = "${image.original}"
                alt = "${image.description}"
            />
            </a>
            </div>
        `).join('');
}

galleryRef.insertAdjacentHTML('afterbegin', galleryCardMarkup);
galleryRef.addEventListener('click', handleModalOpen);

function handleModalOpen(event) {
    event.preventDefault();
    
   const { nodeName, dataset } = event.target;
   nodeName === 'IMG' && showModal(dataset.source);
};

function showModal(src) {
	const handleModalClose = ({ code }) => {
		code === "Escape" && modal.close();
	};
	
	const modalOptions = {
		onShow: () => {
			document.addEventListener("keydown", handleModalClose);
		},
		onClose: () => {
			document.removeEventListener("keydown", handleModalClose);
		},
	};

	const modal = basicLightbox.create(`<img src="${src}" width="800" height="600">`, modalOptions);

	modal.show();
}
