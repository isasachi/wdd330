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

/* Hamburger Menu Button */

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('burgerBtn').classList.toggle('open');
}

const burgerButton = document.getElementById('burgerBtn');
burgerButton.onclick = toggleMenu;

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

/* Comapanies Directory JSON */

const directoryContainer = document.querySelector('.directory-main');
const directoryURL = 'json/data.json';

async function getCompanies() {
    const response = await fetch(directoryURL);
    const responseJSON =  await response.json();
    responseJSON.forEach(item => {
        renderCompany(item);
    })
}

function renderCompany(company) {
    const container = document.createElement('div');
    const companyName = document.createElement('h3');
    const companyAddress = document.createElement('p');
    const companyPhoneNumber = document.createElement('p');
    const companyWebsite = document.createElement('a');
    const companyLogo = document.createElement('img');
    const companyArea = document.createElement('p');
    const companyMembershipLevel = document.createElement('p');

    companyName.textContent = `${company.name}`;
    companyAddress.textContent = `Address: ${company.address}`;
    companyPhoneNumber.textContent = `Phone number: ${company.phoneNumber}`;
    companyWebsite.href = company.websiteURL;
    companyWebsite.textContent = 'Visit website';
    companyLogo.src = company.logoImage;
    companyLogo.alt = company.name;
    companyArea.textContent = `Area: ${company.area}`;
    companyMembershipLevel.textContent = `Membership level: ${company.membershipLevel}`

    container.append(companyLogo, companyName, companyAddress, companyPhoneNumber, companyArea, companyMembershipLevel, companyWebsite);

    // directoryContainer.append(container);
}

window.onload = getCompanies();

/* Weather API */

const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.weather-temp');
const weatherCondition = document.querySelector('.weather-condition');
const windSpeed = document.querySelector('.wind-speed');
const windChill = document.querySelector('.wind-chill');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Lima&units=metric&appid=${config.OWM_API_KEY}`;

async function fetchWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            renderWeatherData(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
    
}

function renderWeatherData(data) {
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    const temp = data.main.temp.toFixed(0);
    const wSpeed = data.wind.speed.toFixed(1);
    const wChill = wSpeed ? (13.12 + (0.6215 * temp) - 11.37 * (wSpeed ** 0.16) + (0.3965 * temp) * (wSpeed ** 0.16)).toFixed(1) : 'N/A';

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    weatherTemp.textContent = temp;
    weatherCondition.textContent = desc;
    windSpeed.textContent = wSpeed;
    windChill.textContent= wChill;
}

fetchWeatherData();