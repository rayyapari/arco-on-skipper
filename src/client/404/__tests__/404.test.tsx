import { render, waitFor, screen } from '@testing-library/react';
import { TestingProvider } from '@tokopedia/skipper/testing';
import '@testing-library/jest-dom';
import Page404 from '..';

describe('App component', () => {
  it('should render without error', async () => {
    render(
      <TestingProvider>
        <Page404 />
      </TestingProvider>,
    );

    await waitFor(() => expect(document.title).toBe('404 - Page Not Found'));

    const contentText = await screen.findByText('Custom Page Not Found.');

    expect(contentText).toBeInTheDocument();
  });
});
