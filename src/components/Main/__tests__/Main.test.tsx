import { render, screen } from '@testing-library/react';
import { TestingProvider } from '@tokopedia/skipper/testing';
import '@testing-library/jest-dom';
import Main from '../../Main';

describe('Main component', () => {
  it('should render without error', async () => {
    render(
      <TestingProvider>
        <Main>
          <div>Dummy text</div>
        </Main>
      </TestingProvider>,
    );

    const text = screen.getByText('Dummy text');

    expect(text).toBeInTheDocument();
  });
});
