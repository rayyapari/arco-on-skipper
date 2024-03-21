import loadable from '@tokopedia/skipper/lazy';
import type { LazySkipperLayoutComponentType } from '@tokopedia/skipper/router';

const LazyLayout: LazySkipperLayoutComponentType = loadable(
  () => import(/* webpackChunkName: "verify-params-layout" */ './index'),
);

export default LazyLayout;
