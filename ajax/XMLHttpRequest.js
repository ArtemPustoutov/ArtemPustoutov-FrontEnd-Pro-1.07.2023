let card = document.createElement('div');
card.setAttribute('id', 'card');
let input = document.getElementById('info');


function clearPage() {
    card.innerHTML = ' ';
}

butt.onclick = function ajax() {
    let req = new XMLHttpRequest();
    let city = document.getElementById('info').value;
    req.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
    req.responseType = "text";

    req.onload = function () {
        if (req.readyState === req.DONE) {
            if (req.status === 200) {
                let weather = JSON.parse( req.responseText );
                let temp = weather.main.temp;
                let pressure = weather.main.pressure;
                let description = weather.weather[0].description;
                let humidity = weather.main.humidity;
                let speed  = weather.wind.speed;
                let deg = weather.wind.deg;
                let icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
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
            }
        }
    }
    req.send(null);
}

input.addEventListener('click', clearPage);