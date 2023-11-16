'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './page.module.scss'

const ProtonePlayerBtn = () => {

    return (
        <Link to="/player" className={styles.macroButton}>
            <FontAwesomeIcon icon={faPlay} color='blue' size='5x' textAnchor='New' border title='ProTONE Player' />
            ProTONE Player
        </Link>
    );
};

export default ProtonePlayerBtn;