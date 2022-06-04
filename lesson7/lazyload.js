const images = document.querySelectorAll('img[data-src]');

function loadImage(entry) {
    const img = entry.target;
    const src = img.getAttribute('data-src');
    img.setAttribute('src', src);
    img.removeAttribute('data-src');
}

const options = {
    treeshold: 0,
    rootMargin: '0px 0px 200px 0px'
};

const imgObserver = new IntersectionObserver( (entries, imgObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry);
            imgObserver.unobserve(entry.target);
        }
    })
}, options);

images.forEach(image => {
    imgObserver.observe(image)
})
