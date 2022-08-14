import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import App from './App';

describe('Test suite', () => {
  it('When page loads', () => {
    render(<App />);
    expect(screen.getByText(/One/i)).toBeInTheDocument()
    expect(screen.getByText(/Two/i)).toBeInTheDocument()
    expect(screen.getByText(/Three/i)).toBeInTheDocument()
  });
  it('No subtext should show', () => {
    render(<App />);
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/content 3/i)).not.toBeInTheDocument()
  });
  it('click on One', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('One'))
    expect(screen.getByText(/content 1/i)).toBeInTheDocument()

    await userEvent.click(screen.getByText('One'))
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument()
  })

  it('click on Two', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Two'))
    expect(screen.getByText('content 2')).toBeInTheDocument()

    await userEvent.click(screen.getByText('Two'))
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument()
  })
});
//content to be hidden or displayed