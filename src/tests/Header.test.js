import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header';

describe('Testing pages that should render correctly', () => {
  it('Header should render correctly', () => {
    const navBar = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(navBar).toMatchSnapshot();
  });
});
