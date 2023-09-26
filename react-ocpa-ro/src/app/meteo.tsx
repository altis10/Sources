'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

const GoToMeteo = () => {

    const goToWeather = () => {
        console.log('GoToMeteo');
    };
    
    return (
        <button className="btn btn-primary" onClick={goToWeather}>
            <FontAwesomeIcon icon={faCloudSunRain} />
            Weather Forecast
        </button>
    );
};

export default GoToMeteo;
