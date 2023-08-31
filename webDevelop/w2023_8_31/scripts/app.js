const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const cityName = data.cityInfo;
  const weather = data.weather;

  console.log(cityName);
  console.log(weather);

  if (weather.IsDayTime) {
    details.innerHTML = `  
  <img class="card-img-top" src="./img/dayimg.png">
  <h5 class="my-3">${cityName.EngishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;
  } else {
    details.innerHTML = `  
  <img class="card-img-top" src="./img/nightimg.png">
  <h5 class="my-3">${cityName.EngishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;
  }

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

/*
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value;
  updateCity(city);
  //   console.log(city);
});
*/

const updateCity = async (city) => {
  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);

  console.log(cityInfo);
  console.log(weather);

  return {
    cityInfo,
    weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value;
  updateCity(city).then((data) => updateUI(data));
});
