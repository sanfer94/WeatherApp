import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import {api_key, url_base_forecast} from './../constants/api_url';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast=>(
    <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>
    ));
}

const renderProgress = () => {
    return <h3>"Cargando Pronóstico extendido"</h3>;
}

const ForecastExtended = ({ city, forecastData } )  => (
        
        <div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
                {forecastData ? renderForecastItemDays(forecastData) : 
                renderProgress()}
        </div>
    
)

ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

//seguir en 14 , 8, min 4:03

export default ForecastExtended;