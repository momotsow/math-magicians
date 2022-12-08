import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../components/quote';

describe('Testing quote page to render as expected', () => {
  const quotePage = render(
    <Router>
      <Quote />
    </Router>,
  );
  it('Quote should render correctly', () => {
    // Assert
    expect(quotePage).toMatchSnapshot();
  });

  it('Quote should contains the title Welcome to home page', () => {
    // Arrange
    const title = screen.getByText('Quotes');
    // Assert
    expect(title).toBeInTheDocument();
  });
});
