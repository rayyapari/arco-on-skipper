import { render, screen, fireEvent } from '@testing-library/react';
import { TestingProvider } from '@tokopedia/skipper/testing';
import Header from '../../Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
  it('should render without error', async () => {
    render(
      <TestingProvider>
        <Header />
      </TestingProvider>,
    );

    const title = screen.getByText('Skipper');
    const logo = screen.getByAltText('logo');

    expect(title).toBeInTheDocument();
    expect(logo).toBeInTheDocument();

    fireEvent.click(logo);

    expect(window.location.pathname).toBe('/');
  });
});
