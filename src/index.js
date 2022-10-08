function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
function search(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = document.querySelector("#typeCity").value;
  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showForecast);
}

let form = document.querySelector("#selectorCity");
form.addEventListener("submit", search);
let dateElement = document.querySelector(".date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
let searchForm = document.querySelector("#selectorCity");
searchForm.addEventListener("submit", search);

function showForecast(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#currentTrmperature");
  h1.innerHTML = temperature;
  let humidity = Math.round(response.data.main.humidity);
  let li1 = document.querySelector("#humid");
  li1.innerHTML = `Humidity: ${humidity} %`;
  let feelsLike = Math.round(response.data.main.feels_like);
  let li2 = document.querySelector("#feels");
  li2.innerHTML = `Feels like: ${feelsLike} °С`;
  let windSpeed = Math.round(response.data.wind.speed);
  let li3 = document.querySelector("#winds");
  li3.innerHTML = `Wind: ${windSpeed} km/h`;
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

function showPosition(position) {
  let buttonP = document.querySelector("#city");
  buttonP.innerHTML = `Your position is ${position.coords.latitude}`;
}
let buttonPosition = document.querySelector(".col-4");
buttonPosition.addEventListener = ("submit", getCurrentPosition);
