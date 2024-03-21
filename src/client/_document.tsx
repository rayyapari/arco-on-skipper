import { HTML, Head, Body, Main, Scripts } from '@tokopedia/skipper/document';
import type { DocumentComponentType } from '@tokopedia/skipper/document';

import { GTMSnippet } from '@tokopedia/lite-tracker/dist/server/GTMSnippet';
import { GASnippet } from '@tokopedia/lite-tracker/dist/server/GASnippet';

/**
 * @description DOCUMENT only run on server! no Browser API allowed.
 * This is an approach to create HTML element without string template
 * by using react element as building blocks.
 *
 * @function Document
 * @param props
 */
const Document: DocumentComponentType = props => {
  const { nonce } = props;
  const enableTrackerValidation = process.env.LITE_PUBLIC_ENABLE_TRACKER_VALIDATION === 'true' ? true : false;

  return (
    <HTML>
      <Head />
      <Body>
        <noscript>
          <div>Website ini memerlukan javascript untuk dapat ditampilkan.</div>
        </noscript>
        <Main />
        <Scripts>
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `
                window.__ENABLE_TRACKER_VALIDATION__=${enableTrackerValidation}`,
            }}
          />

          {process.env.LITE_PUBLIC_TRACKER_GTM_ID && (
            <GTMSnippet nonce={nonce} gtmContainerId={process.env.LITE_PUBLIC_TRACKER_GTM_ID} />
          )}

          {process.env.LITE_PUBLIC_TRACKER_GA_ID && (
            <GASnippet nonce={nonce} gaId={process.env.LITE_PUBLIC_TRACKER_GA_ID} />
          )}
        </Scripts>
      </Body>
    </HTML>
  );
};

export default Document;
