 
const KELVIN = 273;
const key = 'e8bda0393ca6a425bd461f9fb06864cd';

const iconElem = document.querySelector('#weather-icon');
const tempElem = document.querySelector('#temp-value');
const descElem = document.querySelector('#temp-description');
const locationElem = document.querySelector('#location');
const notifyElem = document.querySelector('#notification');

const weather ={};

weather.temperature = {
    unit : "celsius"
}

if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else{
        notificationElement.style.display = "block";
        notificationElement.innerHTML = "<p> Browser doesn't Support Geolocation</p>";    
    }
    
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}


function showError(error){
    notificationElement.style.display ="block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
 
 
function getWeather(latitude, longitude){
   let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&long=${longitude}appid=${key}`;
    
    fetch(api)
        .then(function(response){
           let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - fahrenheit);
            weather.description = data.weather[0].description;
            weather.iconID = data.weather[0].icon;
            weather.city = data.name;
        })
        .then(function(){
            displayWeather();
        });
}
    
function displayWeather(){
    iconElem.innerHTML = `img src="icons/${weather.iconID}.png"/>`;
    tempElem.innerHTML = `${weather.temperature.value} <span>F</span>`;
    descElem.innerHTML = weather.description;
    locationElem.innerHTML = `${weather.city}`;
}
    
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) +32;
}
    
tempElem.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
    
        tempElem.innerHTML = `${weather.temperature.value} °<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    } else{
        tempElem.innerHTML = `${weather.temperature.value} °<span>C</span>`;
        weather.temperature.unit = "celsius";
        }
});