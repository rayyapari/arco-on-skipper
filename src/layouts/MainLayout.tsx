import { Fragment } from 'react';
import type { SkipperLayoutComponentType } from '@tokopedia/skipper/router';

import Main from '@/components/Main';

const MainLayout: SkipperLayoutComponentType = props => {
  const { children } = props;
  return (
    <Fragment>
      <Main>{children}</Main>
    </Fragment>
  );
};

export default MainLayout;
