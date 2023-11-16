'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './page.module.scss';

const PhotoAlbumBtn = () => {
    const btnStyle = styles.t4 + ' ' + styles.macroButton;
    
    return (
        <Link to="/album" className={styles.macroButton}>
            <FontAwesomeIcon icon={faPhotoFilm} color='blue' size='5x' textAnchor='New' border title='Photo Album' />
            Photo Album
        </Link>
    );
};

export default PhotoAlbumBtn;