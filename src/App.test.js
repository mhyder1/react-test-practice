import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test suite', () => {
  it('find elements on page', () => {
    render(<App />);
    expect('One').toBeInTheDocument();
  });
});
