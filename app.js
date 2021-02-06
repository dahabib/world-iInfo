
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
    // input field
    const countryInput = document.getElementById('country-name').value;
    fetchData(countryInput);
});
function fetchData(countryInput) {
    const url = `https://restcountries.eu/rest/v2/name/${countryInput}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data[0]));
}

function displayInfo(data) {
    document.getElementById('country').innerText = data.name;
    document.getElementById('country-flag').setAttribute('src', data.flag);
    document.getElementById('capital').innerText = "Capital : " + data.capital;
    document.getElementById('aria').innerText = "Aria : " + data.area;
    document.getElementById('population').innerText = "Population : " + data.population;
    document.getElementById('country-name').value = "";
}