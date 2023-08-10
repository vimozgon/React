import * as React from "react";

import CityForm from "./CityForm";
import Forecast from "./Forecast";

import "../styles/Main.css";

// Подключу свой API_key
function Main() {
    const API_KEY = "37b9007ca8ee26324ad1e0f894a08479";
    const [info, setInfo] = React.useState({
        days: undefined,
        name: undefined,
        date: undefined,
        sunrise: undefined,
        sunset: undefined
    });
    const [forecast, setForecast] = React.useState([]);
    const getmmHG = (mbar) => {
        return mbar*0.75;   // Сконвертируем mbar в мм.рт.ст
    };
    const getTime = (timeInSec) => {
        // Время из секунд в  чч:мм:сс
        let date = new Date(timeInSec * 1000);
        return date.toLocaleTimeString();
    }
    const getDate = (timeInSec) => {
        // Дата
        let date = new Date(timeInSec * 1000);
        return date.toLocaleDateString();
    }
    const setDays = (days) => {
        setInfo({
            days: days,
            name: undefined,
            date: undefined,
            sunrise: undefined,
            sunset: undefined
        });
    }
    const getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const days = info.days;
        const cnt = days * 8;   // Состав дня из 8 частей по 3 часа
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=${cnt}`);
        const data = await api_url.json();

        let dateInSec = data.list[0].dt;
        let sunriseInSec = data.city.sunrise;
        let sunsetInSec = data.city.sunset;

        setInfo({
            days: days,
            name: data.city.name,
            date: getDate(dateInSec),
            sunrise: getTime(sunriseInSec),
            sunset: getTime(sunsetInSec)
        });
        setForecast(data.list);
        return console.log(data);
    }
    return (
        <main>
            <CityForm getWeather={getWeather} setDays={setDays} />
            <Forecast getmmHG={getmmHG} getTime={getTime} getDate={getDate} info={info} forecast={forecast} />
        </main>
    );
}

export default Main;
