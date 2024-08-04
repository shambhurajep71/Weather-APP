

const search = document.querySelector(".search");
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateFiled = document.querySelector(".time_location span");
const iconField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");



search.addEventListener("click", () => {
    fetchWeather(searchField.value);
})

async function fetchWeather(cityName) {
    try {
        const apiToken = "4667b27ba1e44fe5811143248240408";
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiToken}&q=${cityName}&aqi=no`;
        const responce = await fetch(url);
        const parsedJSON = await responce.json();
        const currTemp = parsedJSON.current.temp_c;
        const currCondition = parsedJSON.current.condition.text;
        const currConditionicon = parsedJSON.current.condition.icon;
        const locationName = parsedJSON.location.name;
        const localTime = parsedJSON.location.localtime;
        updateDom(currTemp, currCondition, currConditionicon, localTime, locationName);

    } catch (err) {
        alert("Please enter valid Location");
        console.error(err);
    }

}

function updateDom(currTemp, currCondition, conditionIcon, localTime, locationName) {
    temperatureField.innerText = `${currTemp} Celcius`;
    cityField.innerText = locationName;
    dateFiled.innerText = localTime;
    iconField.setAttribute("src", conditionIcon);
    weatherField.innerText = currCondition;
}