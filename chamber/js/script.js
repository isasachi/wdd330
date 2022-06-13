const dateField = document.querySelector('.date');
const date = new Date().toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

dateField.textContent = date;

const year = new Date().getFullYear();
const yearField = document.querySelector('.year');
yearField.textContent = year;

const lastModification = document.querySelector('.last-modification');
const lastModificationDate = date.toLocaleString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
})

lastModification.textContent = lastModificationDate;

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('burgerBtn').classList.toggle('open');
}


const burgerButton = document.getElementById('burgerBtn');
burgerButton.onclick = toggleMenu;

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

document.querySelector('input[hidden]').value = date;