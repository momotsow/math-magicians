import React from 'react';
import { render } from '@testing-library/react';
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
});
