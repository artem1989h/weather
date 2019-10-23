import React from "react";

const Weather = () =>{
    return(
        <div className="conteiner">
            <div className="cards">
                <h1>Lviv</h1>
                <h5 className="icons"></h5>
                <i className="wi wi-day-sunny display-1"></i>
                <h1 className="temperature">25&deg;</h1>

                {minmaxTemp(15,20)}
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