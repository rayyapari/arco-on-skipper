import { Helmet } from '@tokopedia/skipper/head';
import { useNavigate } from '@tokopedia/skipper/router';

import type { SkipperComponentType } from '@tokopedia/skipper/router';

import Main from '@/components/Main';

import * as styles from './blog.module.css';

/**
 * @function Blog
 */
const Blog: SkipperComponentType = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Helmet>
        <title>Blog | Skipper Framework</title>
      </Helmet>

      <div className={styles.wrapperContent}>
        <p className={styles.title}>Blog</p>
        <p className={styles.description}>This is just an example page.</p>
        <button className={styles.ctaButton} type="button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </Main>
  );
};

export default Blog;
