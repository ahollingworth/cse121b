const weatherPic = "images/finland_weather.jpg";
document.querySelector("img").setAttribute("src", weatherPic);
document
  .querySelector("img")
  .setAttribute("alt", "a sunset over water in finland");

const key = "e8bda0393ca6a425bd461f9fb06864cd";

document.querySelector("#submit").addEventListener("click", setCity);

function setCity() {
  let cityName = document.querySelector("#city").value;
  getWeather(cityName);
}

function showError() {
  const notificationElement = document.querySelector("#notification");
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p>There is no city found.</p>`;
}

const output = (forecasts) => {
  let article = document.createElement("article");

  let img = document.createElement("img");
  img.classList.add("icons");
  img.setAttribute("src", `icons/${forecasts.weather[0].icon}.png`);
  img.setAttribute("alt", forecasts.weather[0].description);

  let tempValue = document.createElement("h2");
  tempValue.textContent = `${Math.floor(forecasts.main.temp)}°F`;

  let tempDesc = document.createElement("h3");
  tempDesc.textContent = forecasts.weather[0].description;

  article.appendChild(img);
  article.appendChild(tempValue);
  article.appendChild(tempDesc);

  document.querySelector("#forecasts").appendChild(article);
};

const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`
  );
  if (response.ok) {
    let weather = await response.json();

    output(weather);
  } else {
    showError();
  }
};
