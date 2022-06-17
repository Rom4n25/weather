import displayWeatherData from './displayController';
import getWeatherData from './dataController';

function getAndDisplayData() {
  const userInput = document.getElementById('city_input');
  const weatherData = getWeatherData(userInput.value);
  displayWeatherData(weatherData);
}

const citySearchBtn = document.getElementById('city_search_btn');
citySearchBtn.addEventListener('click', getAndDisplayData);
