import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import BookingPage from './BookingPage';

test('initializeTimes fetches and updates availableTimes', async () => {
  render(
    <Router> {/* Wrap the component with BrowserRouter */}
      <BookingPage />
    </Router>
  );

  // Wait for the fetchAPI function to resolve
  await screen.findByText('10:00');
  // Assert that the available times are displayed on the page
  expect(screen.getByText('10:00')).toBeInTheDocument();
});
