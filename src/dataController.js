export default async function getWeatherData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69c6903d6aa55a949b6e61ec65dd1608&units=metric`);
  const data = await response.json();
  return data;
}
