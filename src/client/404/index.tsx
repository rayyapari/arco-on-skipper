import loadable, { LoadableComponent } from '@tokopedia/skipper/lazy';

const LazyRoute: LoadableComponent<unknown> = loadable(() => import(/* webpackChunkName: "not-found" */ './404'));

export default LazyRoute;
