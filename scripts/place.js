const currentYearElement =
document.querySelector(`#currentYear`);

const today = new Date();
const currentYear = today.getFullYear();

currentYearElement.innerHTML = `<span class="currentyear">${currentYear}</span>`

//last modified code below
const lastModifiedElement = 
document.querySelector(`#lastModified`);

const lastModified = today.getDate();

lastModifiedElement.innerHTML = `<p class="lastModified">Last Modified: ${today}</p>`

function calculateWindChill(temperature,windspeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed,0.16);
}

const temperature =
document.querySelector(`#temperature`);
const windspeed =
document.querySelector(`#windspeed`);
const windchill = 
document.querySelector(`#windchill`);

const temperatureContent = parseFloat(temperature.textContent);
const windspeedContent = parseFloat(windspeed.textContent);

const currentWindChill = calculateWindChill(temperatureContent, windspeedContent);

windchill.innerHTML = `${currentWindChill.toFixed(2)} °C`;
windspeed.innerHTML = `${windspeedContent} mph`;
temperature.innerHTML = `${temperatureContent} °C`;
