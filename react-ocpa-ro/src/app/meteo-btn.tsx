'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './page.module.scss';

const MeteoBtn = () => {

    return (
        <Link to="/meteo" className={styles.macroButton}>
            <FontAwesomeIcon icon={faCloudSunRain} color='blue' size='5x' textAnchor='New' border title='Weather Forecast' />
            Weather Forecast
        </Link>
    );
};

export default MeteoBtn;
