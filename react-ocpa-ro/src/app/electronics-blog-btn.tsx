'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './page.module.css';


const ElectronicsBlogBtn = () => {
    return (
        <Link to="/blog" className={styles.macroButton}>
            <FontAwesomeIcon icon={faMicrochip} color='blue' size='5x' textAnchor='New' border title='Electronics Blog' />
            Electronics Blog
        </Link>
    );
};

export default ElectronicsBlogBtn;