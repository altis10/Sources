'use client';

import styles from './page.module.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import HomeComponent from './home';
import ProtonPlayerComponent from './protone-player-component';
import MeteoComponent from './meteo-component';
import ElectronicsBlogComponent from './electronics-blog-component';
import PhotoAlbumComponent from './photo-album-component';


export default function App() {
  return (
    <div className="App">
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
        <main className={styles.main}>
          <Routes>
            <Route path="/" Component={HomeComponent} />
            <Route path="/player" Component={ProtonPlayerComponent} />
            <Route path="/meteo" Component={MeteoComponent} />
            <Route path="/blog" Component={ElectronicsBlogComponent} />
            <Route path="/album" Component={PhotoAlbumComponent} />  
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
