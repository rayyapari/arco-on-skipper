import type { FC } from 'react';

import * as styles from './main.module.css';
import type { MainProps } from './types';

/**
 * @function Main
 */
const Main: FC<MainProps> = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default Main;
