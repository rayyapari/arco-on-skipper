import { Fragment, useState } from 'react';
import { Helmet } from '@tokopedia/skipper/head';
import { useNavigate } from '@tokopedia/skipper/router';

import type { SkipperComponentType } from '@tokopedia/skipper/router';

import * as styles from './home.module.css';

/**
 * @function Home
 */
const Home: SkipperComponentType = () => {
  const navigate = useNavigate();

  const titleColors = ['#212121', '#0094CF', '#00AA5B', '#9342ED', '#F94D63', '#009F92', '#FF7F17'];
  const [currentTitleColorIndex, setCurrentTitleColorIndex] = useState(0);

  const handleTitleColor = () => {
    setCurrentTitleColorIndex((currentTitleColorIndex + 1) % titleColors.length);
  };

  const currentTitleColor = titleColors[currentTitleColorIndex];

  return (
    <Fragment>
      <Helmet>
        <title>Home | Skipper Framework</title>
      </Helmet>

      <main className={styles.main}>
        <div className={styles.wrapperTop}>
          <p className={styles.cta}>
            Getting started by editing{' '}
            <code>
              <strong>routes/Home/index.tsx</strong>
            </code>
          </p>
          <div className={styles.wrapperLogo}>
            <span>By</span>
            <img src="/assets/logo.png" alt="Skipper Logo" width="150" />
          </div>
        </div>

        <div className={styles.wrapperMiddle}>
          <h1 className={styles.title} style={{ color: `${currentTitleColor}` }}>
            Skipper Framework
          </h1>
          <p className={styles.desc}>
            We recommended you to take a look at the{' '}
            <a
              className={styles.descLink}
              href="https://tokopedia.atlassian.net/l/cp/xbZT4ni4"
              target="_blank"
              rel="noreferrer"
            >
              Skipper Framework Documentation
            </a>
            , whether you are new or have previous experience with the framework.
          </p>
          <ul className={styles.menu}>
            <li onClick={() => navigate('/about/us')}>About</li>
            <li onClick={() => navigate('/blog')}>Blog</li>
          </ul>
        </div>

        <div className={styles.wrapperBottom}>
          <p className={styles.copyright}>Copyright © WPE Core Team 2023</p>
          <button className={styles.wrapperCta} type="button" onClick={handleTitleColor}>
            <img src="/assets/icon_ar_wand.svg" alt="Icon Ar Wand" />
            Change Title Color
          </button>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
