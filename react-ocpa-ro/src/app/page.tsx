'use client';

import styles from './page.module.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import HomeComponent from './home';
import ProtonPlayerComponent from './protone-player-component';
import MeteoComponent from './meteo/meteo-component';
import ElectronicsBlogComponent from './electronics-blog-component';
import PhotoAlbumComponent from './photo-album-component';
import Head from 'next/head';


export default function App() {
  const mainStyle = `${styles.main} container`
  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
    </Head>
    <BrowserRouter>
      <header>
        <nav>
          <ul className={styles.menu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/player">ProTONE Player</Link></li>
            <li><Link to="/meteo">Weather Forecast</Link></li>
            <li><Link to="/blog">Electronics Blog</Link></li>
            <li><Link to="/album">Photo Album</Link></li>
          </ul>
        </nav>
      </header>
      <main className={mainStyle}>
        <Routes>
          <Route path="/" Component={HomeComponent} />
          <Route path="/player" Component={ProtonPlayerComponent} />
          <Route path="/meteo" Component={MeteoComponent} />
          <Route path="/blog" Component={ElectronicsBlogComponent} />
          <Route path="/album" Component={PhotoAlbumComponent} />  
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}
