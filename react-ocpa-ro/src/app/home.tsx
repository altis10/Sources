'use client';

import Image from 'next/image';
import styles from './page.module.css';
import MeteoBtn from './meteo-btn';
import ProtonePlayerBtn from './protone-player-btn';
import ElectronicsBlogBtn from './electronics-blog-btn';
import PhotoAlbumBtn from './photo-album-btn';

const HomeComponent = () => {
    return (
        <>
        <div className={styles.description}>
          <p> Welcome! Please choose one of the categories below, or use the right-top menu. </p>
        </div>
        <div className={styles.grid2c}>
          <MeteoBtn></MeteoBtn>
          <ProtonePlayerBtn></ProtonePlayerBtn>
          <ElectronicsBlogBtn></ElectronicsBlogBtn>
          <PhotoAlbumBtn></PhotoAlbumBtn>
        </div>
        </>
    );
}

export default HomeComponent;