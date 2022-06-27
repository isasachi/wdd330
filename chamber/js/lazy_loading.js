/* Lazy Loading */

const loadImage = (entry) => {
    const image = entry.target;
    const src = image.getAttribute('data-src');
    image.setAttribute('src', src);
    image.removeAttribute('data-src');
}

const options = {
    treshold: 0
};

const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            loadImage(entry);
            observer.unobserve(entry.target);
        }
    })
}, options);

images.forEach(image => {
    imageObserver.observe(image);
});