import React from "react";

const Weather = (props) =>{
    return(
        <div className="container">
            <div className="cards pt-4">
                <h1>
                {props.city},{props.country}
                </h1>
                <h5 className="icons"></h5>
                <i className={`wi ${props.weathericon} display-1`}></i>
                <h1 className="temperature">{props.temp_celsius}&deg;</h1>

                {minmaxTemp(props.temp_min,props.temp_max)}

                <h4 className="weather-description">{props.description}</h4>
            </div>
        </div>
    );
}


function minmaxTemp(min,max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
        
    );
}

export default Weather;