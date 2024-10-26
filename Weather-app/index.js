const apiKEY = "5da0bd7d7092a330045f31624e056cb0";
let cityName = "Ha Dong";
const currentTime = document.getElementById('current_time');
const currentDate = document.getElementById('current_date');
const Name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const wind_speed = document.getElementById('wind_speed');
const weather_main = document.getElementById('weather_main');
const search_input = document.getElementById('search_input');
const main_weather_img = document.getElementById('main_weather_img');
const weather_forecast_img = Array.from(document.getElementsByClassName('weather_forecast_img'));
const weather_forecast_temp = Array.from(document.getElementsByClassName('weather_forecast_temp'));
const weather_forecast_date = Array.from(document.getElementsByClassName('weather_forecast_date'));
const weather_hourly_forecast_date = Array.from(document.getElementsByClassName('weather_hourly_forecast_date'));
const weather_hourly_forecast_img = Array.from(document.getElementsByClassName('weather_hourly_forecast_img'));
const weather_hourly_forecast_temp = Array.from(document.getElementsByClassName('weather_hourly_forecast_temp'));
const weather_hourly_forecast_speed = Array.from(document.getElementsByClassName('weather_hourly_forecast_speed'));


function convertTime(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let time_hour = date.getHours();
    let time_minutes = date.getMinutes();
    return formattedTime = `${String(time_hour).padStart(2, '0')}:${String(time_minutes).padStart(2, '0')}`
}

function convertDate(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let options = { weekday: 'long', day: '2-digit', month: 'short' };
    formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}

search_input.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        cityName = String(search_input.value);
        start();
    }
})

function run(data) {
    var data_timeStamp = ""
    var data_city_name = data["name"];
    var data_temp = Math.floor(data["main"]["temp"] - 273.15);
    var data_feels_like = Math.floor(data["main"]["feels_like"] - 273.15);
    var data_sunrise = data["sys"]["sunrise"];
    var data_sunset = data["sys"]["sunset"];
    var date = convertDate(data['dt']);
    var data_humidity = data["main"]["humidity"];
    var data_pressure = data["main"]["pressure"];
    var data_wind_speed = data["wind"]["speed"];
    var data_weather_main = data["weather"][0]["main"];


    data_sunrise = convertTime(data_sunrise);
    data_sunset = convertTime(data_sunset);
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    data_timeStamp = `${hour}:${min}`
      

    currentTime.innerText = data_timeStamp;
    currentDate.innerText = date;
    Name.innerText = data_city_name;
    temp.innerText = data_temp;
    feels_like.innerText = data_feels_like;
    sunrise.innerText = data_sunrise;
    sunset.innerText = data_sunset;
    humidity.innerText = data_humidity;
    wind_speed.innerText = data_wind_speed;
    pressure.innerText = data_pressure;
    weather_main.innerText = data_weather_main;

    main_weather_img.src = check_weather_icon(weather_main.innerText);
   

    
    
}

function check_weather_icon(weather_name) {
    switch (weather_name) {
        case "Thunderstorm":
            return "https://openweathermap.org/img/wn/11d@2x.png";
        case "Thunderstorm":
            return "https://s3-alpha-sig.figma.com/img/560a/0b94/f13d5b080d9f2330f9f316ec0c49f9bb?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VjZ0QrXyA17Tu~qzOuKkS-9BrvSe0HJrNSCtXS7jAnWH0eNhuySNMlxasSXZEtRtGXDfo7d2C-dlh2SHOvm6S0luK7v4DbJwm-UUE4N70OpLqYJnFNpBTCjTfPjlGL6ouk8MbmIS1WdXfV5RljvFuAgENECB-5lFAVfZi9r8dvQULusqY0D3x7fnv6t9Qn8qtw9GVcD8wcgyo1-UGzfN316QPPN5L6KaLvHHeXFUCz8jhe75UwNrNRXy4f5uT0oyAGKpmkgQhfs~II0iyV-Fey6JDSTmSHPbwbA-7960mhC9rvHgSKfrNzP6ueljquniTL2rpgxisFMjUsMNKxvEaw__";
        case "Drizzle":
            return "https://s3-alpha-sig.figma.com/img/e1e7/e0a0/6f2880e6e77ac6112553fbada8fad045?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6wm4bK-6tNYIVKWw7ExbZ9TDp2iARrtOUKcc8RB9UIDkxNfiG1qRa7f6KKEAKxEeWHAUizUzLFn-u79PSCokcBd0u4lnz9AxnocEcbuYZCmLq43eWYkFBqjagpv9Qo-rTvRbb93GqRgGb66BZNyj3mib07hp4SF7cCtaBx1SNRXLKGaYSt4tIbGjQfcuFJ2TkTlygn7P5S1XytqPjk4KCC8JQfFsRU4rYEw24nsWKlAQcD16wpeOCCuBYd9W7MyuIggQP73eKV5Yzvjooq5Pah-CkanrT33VUhYAYe~G1ghBkad2nuHZJBnGI1EfJdDq9IX0nQAa2inFEZsB~8RPQ__";
        case "Rain":
            return "https://s3-alpha-sig.figma.com/img/cd44/fde2/29b4d987b7c3c469c28b1c201ddc576e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qGbVdLDaEy~pYoSFAoGPO5NsmgW0LPFTLlnpfGbO8~kn-PJPIeMk0q-BchbBB9sguMmMBg9U4U5XBiVLfE3Pzar6mb9nDnD0MjaQO95N~pmALMpmaKChXiiaqpq2HY9s38st7nSAaKEazLRXSDsH7WIw~doKmZ79I~HG0PEJ2sq6l~RHibpBTEGxi1TXwSA4LXFoQaMpLBvuaUUoF0pbjUPjTSGVm9~bEp3esht26VcTcPfgsWz4RJHMXd2Vd2nzxUTbSyBYh-5Y8qF6Ruux0KsDYk2k3L17fbHCBL2M8xYQrO7k16JhZlYPGVWKulqwo1fOEXhQT924ZAxU8c27mQ__";
        case "Snow":
            return "https://openweathermap.org/img/wn/13d@2x.png";
        case "Clouds":
            return "https://s3-alpha-sig.figma.com/img/bf19/6c94/cbfcbafce4cd54305df699239636628b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYMBVOxWkfAa~Ey3Ro-1e~3xPV4vjAHsPjweiUf1sgs~yDNP8Qb0IHRW~5Lk6O1pal50nmbKO3JHsiO11fi5JUhdNYX5qMAJtXOPtfel8EVjShuMc~TH~nzzDaL1MAi1SL9rhXEpvDMYnqtK4S4NBmzaD~yK4m4l2ZxJIZ6jXW0bRyLw4bbItx9mPahJdqj1AYkbXPsuE1cXtFnMNbGimkVcluSIaaGEVJXyYIDzELRy7pWiBU8G29clicJxr1Ximhyuu7avzYRxBJelBjgfBW0kkuAb8mV8NdTbD3y7jlI0OzvniipuXZNmWMfqiljqafvuoJ11ooZ1OSqfWAs0tQ__";
        case "Clear":
            return "https://s3-alpha-sig.figma.com/img/efa2/cf5a/1d7b9e01f29bf7c83b014121c2d853b7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VfmL7O3Zdmvg9Ny0k-f4QmbbKIqQp~Syz3yu86ve0M1TPXtNchU0Hh8VlAMCdr7fh6Ebu2XHVUWhPv8ARunt1gkyOk5G-zjfi1iYLtqMplF9PhCnrZh5qaZGoI9iiwNUY0n0bA0P5tC5taSJxjNn6zRbRPS-YV~N0NnStyxyvAjuHsmWKHiJbG3tHQPRmNZM8tApmlPE9q~08W-p7kUhMWsRYUpz9GGZ9RmonaeZHlb3bzUzaAOMz8cvTCfKWERJf5e9MKLhAdsTUPC7WnCytYulnX3tk8tK1ocjxGGEnGvWEFwLqI1oS9mfRarfFxFyQU4k8aOPrXexDsJR7iFCJA__";
        default:
            return "https://s3-alpha-sig.figma.com/img/efa2/cf5a/1d7b9e01f29bf7c83b014121c2d853b7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VfmL7O3Zdmvg9Ny0k-f4QmbbKIqQp~Syz3yu86ve0M1TPXtNchU0Hh8VlAMCdr7fh6Ebu2XHVUWhPv8ARunt1gkyOk5G-zjfi1iYLtqMplF9PhCnrZh5qaZGoI9iiwNUY0n0bA0P5tC5taSJxjNn6zRbRPS-YV~N0NnStyxyvAjuHsmWKHiJbG3tHQPRmNZM8tApmlPE9q~08W-p7kUhMWsRYUpz9GGZ9RmonaeZHlb3bzUzaAOMz8cvTCfKWERJf5e9MKLhAdsTUPC7WnCytYulnX3tk8tK1ocjxGGEnGvWEFwLqI1oS9mfRarfFxFyQU4k8aOPrXexDsJR7iFCJA__";
    }
}

function run_forecast(data) {
    var data_weather = data['list'][7]['weather'][0]['main'];
    var data_temp = Math.floor(data['list'][7]['main']['temp'] - 273.15);
    var data_feels_like = Math.floor(data['list'][7]['main']['feels_like'] - 273.15);
    var data_date = convertDate(data['list'][7]['dt']);

    console.log(data['list']);
    weather_forecast_img.map(function(item,index) {
        item.src = check_weather_icon(data['list'][index + 7*index]['weather'][0]['main']);
    });
    weather_forecast_temp.map(function(item,index) {
        item.innerText = Math.floor(data['list'][index + 7*index]['main']['temp'] - 273.15);
    });
    weather_forecast_date.map(function(item,index) {
        item.innerText = convertDate(data['list'][index + 7*index]['dt']);
    });

    weather_hourly_forecast_date.map((function(item,index) {
        item.innerText = item.innerText = convertTime(data['list'][index]['dt']);
    }));

    weather_hourly_forecast_img.map((function(item,index) {
        item.src = check_weather_icon(data['list'][index]['weather'][0]['main']);
    }));

    weather_hourly_forecast_temp.map((function(item,index) {
        item.innerText = Math.floor(data['list'][index]['main']['temp'] - 273.15);
    }));

    weather_hourly_forecast_speed.map((function(item,index) {
        item.innerText = data['list'][index]['wind']['speed'];
    }));
    
    
}
function start() {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKEY}`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            run(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKEY}`;

        fetch(apiForecastURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                run_forecast(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
}
start();









