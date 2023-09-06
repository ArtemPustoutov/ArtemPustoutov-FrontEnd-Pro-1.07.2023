
let card = document.createElement('div');
card.setAttribute('id', 'card');
let input = document.getElementById('info');

function clearPage() {
    card.innerHTML = ' ';
}

butt.onclick = function wetherAll() {
    let city = document.getElementById('info').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let temp = data.main.temp;
            let pressure = data.main.pressure;
            let description = data.weather[0].description;
            let humidity = data.main.humidity;
            let speed  = data.wind.speed;
            let deg = data.wind.deg;
            let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            card.innerHTML = `
            <h2>Город : ${city};</h2>
            <p>Температура: ${temp} градуса</p>
            <p>Давление : ${pressure}</p>
            <p>Описание : ${description}</p>
            <p>Влажность : ${humidity} %</p>
            <p>Скорость ветра : ${speed}</p>
            <p>направлене ветра : ${deg} градусов</p>
            <img src = "${icon}" alt = "weather icon">
            `
            document.body.append(card);
        });
}

input.addEventListener('click', clearPage);