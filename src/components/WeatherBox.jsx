import React from "react";

const WeatherBox = (props) => {
    return (
        <>
            <div className='title'>Check City Temperature</div>

            <div className="weather-box" style={{ background: 'orangered' }}>
                <input type="text" value={props.city} onChange={props.handleChange} />
                <div className="data">
                    <img src={props.img} alt={props.text} />
                    <div>{props.text}</div>
                    <div className="name">{props.name}</div>
                    <div>Temperature:</div>
                    <div className="tempc">{props.tempC}&#8451;</div>
                    <div className="tempf">{props.tempF}&#8457;</div>
                    <div>Humidity:</div>
                    <div>{props.humidity}</div>
                </div>
            </div>
        </>
    )
}
export default WeatherBox;