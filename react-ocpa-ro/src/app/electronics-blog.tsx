'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

const GoToElectronicsBlog = () => {

    const goToBlog = () => {
        console.log('GoToElectronicsBlog');
    };
    
    return (
        <button className="btn btn-primary" onClick={goToBlog}>
            <FontAwesomeIcon icon={faMicrochip} />
            Electronics Blog
        </button>
    );
};

export default GoToElectronicsBlog;