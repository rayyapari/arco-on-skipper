import { render, waitFor } from '@testing-library/react';
import { TestingProvider } from '@tokopedia/skipper/testing';
import '@testing-library/jest-dom';

import App from '../_app';

describe('App component', () => {
  it('should render without error', async () => {
    render(
      <TestingProvider>
        <App>
          <div>Dummy text</div>
        </App>
      </TestingProvider>,
    );

    await waitFor(() => expect(document.title).toBe('Welcome to skipper framework'));
  });
});
