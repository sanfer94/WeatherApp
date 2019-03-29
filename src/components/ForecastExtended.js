import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {api_key, url_base_forecast} from './../constants/api_url';
import './styles.css';

const days =['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}


class ForecastExtended extends Component {

    constructor(){
        super();
        this.state ={ forecastData: null};
    }

    componentDidMount(){
        const url_forecast = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
            }
        );
    }
    renderForecastItemDays(){
        return "render items";
        //return days.map(day=>(<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
    }

    renderProgress = () => {
        return <h3>"Cargando Pronóstico extendido"</h3>;
    }

    render() {
        const { city } = this.props;
        const{ forecastData} = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays() : 
                this.renderProgress()}
        </div>)
    }
}

ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;