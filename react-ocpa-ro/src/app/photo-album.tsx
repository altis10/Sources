'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

const GoToPhotoAlbum = () => {

    const goToPhAlbum = () => {
        console.log('GoToPhotoAlbum');
    };
    
    return (
        <button className="btn btn-primary" onClick={goToPhAlbum}>
            <FontAwesomeIcon icon={faPhotoFilm} />
            Photo Album
        </button>
    );
};

export default GoToPhotoAlbum;