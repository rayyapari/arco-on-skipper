import type { SkipperLayoutComponentType } from '@tokopedia/skipper/router';
import { useParams, useStaticRouter } from '@tokopedia/skipper/router';
import { Fragment } from 'react';

/**
 * This is an example of how to handle parameters
 * for the template end-to-end (e2e) only.
 * In real-world use cases,
 * we encourage you to use the Tokopedia Lite validator to handle such scenarios.
 * @see https://tokopedia.atlassian.net/wiki/spaces/PL/pages/2044985989/Lite+Validator
 */
function isValidSlug(input: unknown): boolean {
  const maybeSlug = String(input);
  const notValid = /[^a-zA-Z0-9-]/.test(maybeSlug);
  return !notValid;
}

const VerifyParamsLayout: SkipperLayoutComponentType = props => {
  const { slug } = useParams<{ slug: string }>();
  const valid = isValidSlug(slug);
  const staticContext = useStaticRouter();
  if (!valid) {
    if (staticContext) {
      staticContext.statusCode = 404;
    }
    return <p>not found</p>;
  }
  return <Fragment>{props.children}</Fragment>;
};

export default VerifyParamsLayout;
