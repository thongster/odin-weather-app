// visual crossing key 5XF6Z9YQS855HGSV5HXPV5VAV

const iconList = {
  "clear-day": "./icons/clear-day.svg",
  "clear-night": "./icons/clear-night.svg",
  "cloudy": "./icons/cloudy.svg",
  "fog": "./icons/fog.svg",
  "hail": "./icons/hail.svg",
  "partly-cloudy-day": "./icons/partly-cloudy-day.svg",
  "partly-cloudy-night": "./icons/partly-cloudy-night.svg",
  "rain-snow-showers-day": "./icons/rain-snow-showers.svg",
  "rain-snow-showers-night": "./icons/rain-snow-showers.svg",
  "rain-snow": "./icons/rain-snow-showers.svg",
  "rain": "./icons/rain.svg",
  "showers-day": "./icons/showers-day.svg",
  "showers-night": "./icons/showers-night.svg",
  "sleet": "./icons/sleet.svg",
  "snow-showers-day": "./icons/snow-showers-day.svg",
  "snow-showers-night": "./icons/snow-showers-night.svg",
  "snow": "./icons/snow.svg",
  "thunder-rain": "./icons/thunder-rain.svg",
  "thunder-showers-day": "./icons/thunder-showers-day.svg",
  "thunder-showers-night": "./icons/thunder-showers-night.svg",
  "thunder": "./icons/thunder.svg",
  "wind": "./icons/wind.svg"
};

const form = document.getElementById('searchForm');
const search = document.getElementById('searchWeather');
const button = document.getElementById('getWeatherButton');

const resolvedAddress = document.getElementById('resolvedAddress');
const condition = document.getElementById('condition');

const icon = document.getElementById('icon');
const temp = document.getElementById('temp');
const description = document.getElementById('description');

const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const feelslike = document.getElementById('feelslike');

initialDisplay()

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchData();
});

async function initialDisplay() {
    const location = "Paris fr";
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5XF6Z9YQS855HGSV5HXPV5VAV`
    );
    if (!response.ok) {
      throw new Error('There is an error');
    }
    const result = await response.json();
    displayData(result)    
}

async function fetchData() {
  try {
    const location = search.value;
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5XF6Z9YQS855HGSV5HXPV5VAV`
    );
    if (!response.ok) {
      throw new Error('There is an error');
    }
    const result = await response.json();
    displayData(result)
    // img.src = dataTop.data.images.original.url
  } catch (error) {
    console.error(error);
  }
}

function displayIcon(result) {
    const data = result
    const iconCondition = data.currentConditions.icon
    icon.src = iconList[iconCondition]
}

function displayData(result) {
    const data = result
    resolvedAddress.textContent = data.resolvedAddress;
    condition.textContent = data.currentConditions.conditions;

    // figure out icon import
    displayIcon(result)
    temp.textContent = `${data.currentConditions.temp}°F`;
    description.textContent = data.description;

    humidity.textContent = `${data.currentConditions.humidity}%`;
    wind.textContent = `${data.currentConditions.windspeed}km/h`;
    feelslike.textContent = `${data.currentConditions.feelslike}°F`;

    const tempF = data.currentConditions.temp;
    const feelslikeF = data.currentConditions.feelslike;
    const tempC = Math.round((5 / 9) * (tempF - 32) * 10) / 10;
    const feelslikeC = Math.round((5 / 9) * (feelslikeF - 32) * 10) / 10;
}

function convertToC(tempF, feelslikeF) {
  const tempC = Math.round((5 / 9) * (tempF - 32) * 10) / 10;
  const feelslikeC = Math.round((5 / 9) * (feelslikeF - 32) * 10) / 10;
  temp.textContent = `${data.currentConditions.temp}°C`;
  feelslike.textContent = `${data.currentConditions.feelslike}°C`;
}
