import type { FC } from 'react';
import { Helmet } from '@tokopedia/skipper/head';
import * as styles from './404.module.css';

/**
 * @description Custom 404 page
 * @function NotFound
 */
const NotFound: FC<unknown> = () => {
  return (
    <div className={styles.containerCx}>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta key="robots" name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className={styles.bodyCx}>
        <h1 className={styles.titleCx}>404</h1>
        <div className={styles.descriptionCx}>
          <h2 className={styles.textCx}>Custom Page Not Found.</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
