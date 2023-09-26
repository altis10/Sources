'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const GoToProtonePlayer = () => {

    const goToPlayer = () => {
        console.log('GoToProtonePlayer');
    };
    
    return (
        <button className="btn btn-primary" onClick={goToPlayer}>
            <FontAwesomeIcon icon={faPlay} />
            ProTONE Player
        </button>
    );
};

export default GoToProtonePlayer;