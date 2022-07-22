/* Hamburger Menu Button */

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('burgerBtn').classList.toggle('open');
}

const burgerButton = document.getElementById('burgerBtn');
burgerButton.onclick = toggleMenu;

// Last modification date

const lastModification = document.querySelector('.last-modification');
const lastModificationDate = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
})

lastModification.textContent = lastModificationDate;

/* Weather API */

const OWM_API_KEY = '5eb92a32fb342431913bce6747846956';

const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.weather-temp');
const weatherCondition = document.querySelector('.weather-condition');
const weatherHumidity = document.querySelector('.humidity');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Maryland&units=imperial&appid=${OWM_API_KEY}`;

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
    const humidity = data.main.humidity;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    weatherTemp.textContent = temp;
    weatherCondition.textContent = desc;
    weatherHumidity.textContent = humidity;
}

fetchWeatherData();