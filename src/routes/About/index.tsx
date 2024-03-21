import { Helmet } from '@tokopedia/skipper/head';
import { useNavigate, useData } from '@tokopedia/skipper/router';

import type { SkipperComponentType, GetServerSideProps } from '@tokopedia/skipper/router';

import Main from '@/components/Main';

import * as styles from './about.module.css';

interface Data {
  random: number;
}

/**
 * @function About
 */
const About: SkipperComponentType = () => {
  const navigate = useNavigate();
  const data = useData<Data>();

  return (
    <Main>
      <Helmet>
        <title>About | Skipper Framework</title>
      </Helmet>

      <div className={styles.wrapperContent}>
        <p className={styles.title}>About</p>
        <p className={styles.description}>
          This is an example of page with static method.
          <br />
          Random number: {data?.random ?? 0}
        </p>
        <button className={styles.ctaButton} type="button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps<Data> = async () => {
  const random = Math.floor(Math.random() * (100 - 1) + 1);

  return {
    props: {
      random,
    },
  };
};

export default About;
