import type { FC, ReactNode } from 'react';
import { Link } from '@tokopedia/skipper/router';
import * as styles from './header.module.css';

interface HeaderProps {
  children?: ReactNode;
}

/**
 * @function Header
 */
const Header: FC<HeaderProps> = props => {
  const { children = null } = props;

  return (
    <header className={styles.header}>
      <div className={styles.headerFloat}>
        <div className={styles.wrapper}>
          <Link className={styles.brand} to="/">
            <img
              className={styles.logo}
              alt="logo"
              src="https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/media/icons/icon144.png"
            />
            <span className={styles.title}>Skipper</span>
          </Link>
          <div className={styles.navItem}>{children}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
