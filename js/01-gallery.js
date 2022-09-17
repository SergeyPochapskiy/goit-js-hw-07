import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const itemsMarkup = galleryItems.map(element => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item'
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	return galleryItem
})

galleryRef.append(...itemsMarkup)

galleryRef.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    galleryRef.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	})
})