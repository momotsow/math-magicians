import React from 'react';
import { render } from '@testing-library/react';
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
});
