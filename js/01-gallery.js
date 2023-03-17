import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

let listEl = ''

galleryItems.forEach((item) => { 
  const addGallery = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
    listEl += addGallery
    console.log(addGallery);
})

gallery.insertAdjacentHTML('afterbegin', listEl)


gallery.addEventListener('click', (ev) => { 
    ev.preventDefault();
    
    if (ev.target.tagName !== 'IMG') { 
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${ev.target.dataset.source}" width="800" height="600">
`)
    instance.show()

    window.addEventListener('keydown', (ev) => { 
        if (ev.key === 'Escape') { 
            instance.close();
        }
    })


})



