import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const itemsMarkup = galleryItems.map(element => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description

	galleryLink.append(galleryImage)
	return galleryLink
})
galleryRef.append(...itemsMarkup)

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})
