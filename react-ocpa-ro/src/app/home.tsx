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
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' MYSELF'}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div className={styles.grid2c}>
            <a>
                <MeteoBtn></MeteoBtn>
            </a>
            <a>
                <ProtonePlayerBtn></ProtonePlayerBtn>
            </a>
            <a>
                <ElectronicsBlogBtn></ElectronicsBlogBtn>
            </a>
            <a>
                <PhotoAlbumBtn></PhotoAlbumBtn>
            </a>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
        </>
    );
}

export default HomeComponent;