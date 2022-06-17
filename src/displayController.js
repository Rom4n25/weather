export default function displayWeatherData(data) {
  const dataDiv = document.querySelector('.data');
  const temp = document.createElement('p');
  const feelsLike = document.createElement('p');
  const pressure = document.createElement('p');

  data.then((result) => {
    temp.textContent = result.main.temp;
    feelsLike.textContent = result.main.feels_like;
    pressure.textContent = result.main.pressure;

    dataDiv.append(temp, feelsLike, pressure);
  });
}
