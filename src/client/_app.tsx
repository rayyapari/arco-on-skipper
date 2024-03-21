import { StrictMode } from 'react';
import { Helmet } from '@tokopedia/skipper/head';

import type { AppComponentType } from '@tokopedia/skipper/app';

import '@/styles/global.css';

/**
 * @function App
 */
const App: AppComponentType = props => {
  const { children } = props;
  return (
    <StrictMode>
      <Helmet>
        <html lang="id" />
        <title>Welcome to skipper framework</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=no, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      {children}
    </StrictMode>
  );
};

export default App;
