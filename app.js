const KEY = "3cc93a01996d4195b8f85813231405";
const API_URL = "https://api.weatherapi.com/v1";
const API_URL_CURRENT = `${API_URL}/current.json?key=${KEY}`;

const input = document.querySelector("#input");
const button = document.querySelector("#search");
const country = document.querySelector("#country");
const place = document.querySelector("#place");
const temp = document.querySelector("#temp");

async function getWeather(url) {
    try {
        const response = await fetch(`${API_URL_CURRENT}&q=${url}`, { mode: "cors" });
        const data = await response.json();
        return data;
    }
    catch (error) {
        alert("error!");
    }
}

button.addEventListener("click", () => {
    let inputValue = input.value,
        countryValue,
        placeValue = inputValue;

    getWeather(inputValue).then((data) => {
        let tempValue = data.current.temp_c;
        countryValue = data.location.country;

        country.innerText = `Country: ${countryValue}`;
        place.innerText = `Place: ${placeValue}`;
        temp.innerText = `Temp: ${tempValue} °C`;

        input.value = "";
    }).catch(() => {
        alert("Enter a valid term to search");
        input.value = "";
    });

});