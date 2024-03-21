import { AnalyticLayout } from '@tokopedia/lite-tracker/dist/client/AnalyticLayout';
import type { SkipperLayoutComponentType } from '@tokopedia/skipper/router';

const DefaultLayout: SkipperLayoutComponentType = ({ children, pageType = '' }) => {
  return <AnalyticLayout pageType={pageType}>{children}</AnalyticLayout>;
};

export default DefaultLayout;
