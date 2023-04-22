import React from "react";


const api = {
    key: "a72d83c9186b22629cf76ca4edff54ea",
    base: "https://api.openweathermap.org/data/2.5/"
}
function Weather(){

    return(
        <div className="weather__body">
            <div className="weather__location-date">
                <div className="weather__title-location">Moscow, RU</div>
                <div className="weather__title-date">22 Apr, 2023</div>
            </div>
            <div className="weather__temp-info">
                <div className="weather__temp-value">10°C</div>
                <div className="weather__temp-state">Clouds</div>
                <div className="weather__temp-emoji">☁️</div>
            </div>
            <div className="weather__search">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.93585" cy="6.93585" r="5.93585" stroke="#3F5CAD" stroke-width="2"/>
                    <path d="M16.2075 18.5614C16.598 18.9519 17.2312 18.952 17.6217 18.5614C18.0122 18.1709 18.0122 17.5377 17.6217 17.1472L16.2075 18.5614ZM11.9835 11.509L11.2764 10.8019L9.8622 12.2161L10.5693 12.9232L11.9835 11.509ZM17.6217 17.1472L11.9835 11.509L10.5693 12.9232L16.2075 18.5614L17.6217 17.1472Z" fill="#3F5CAD"/>
                </svg>
                <input type="text" className="weather__search-bar" placeholder="Search"/>
            </div>

        </div>
    )
}
export default Weather;