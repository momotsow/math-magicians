import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/home';

describe('Testing home page to render as expected', () => {
  const homePage = render(
    <Router>
      <Home />
    </Router>,
  );
  it('Home should render correctly', () => {
    // Assert
    expect(homePage).toMatchSnapshot();
  });

  it('Home should contains the title Welcome to home page', () => {
    // Arrange
    const title = screen.getByText('Welcome to home page');
    // Assert
    expect(title).toBeInTheDocument();
  });
});
