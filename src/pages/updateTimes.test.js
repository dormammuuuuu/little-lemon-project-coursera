import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import BookingPage from './BookingPage';

test('updateTimes dispatches the selected date and fetches available times', async () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );

  // Find and select the date input element
  const dateInput = screen.getByLabelText('Choose Date');
  fireEvent.change(dateInput, { target: { value: '2023-10-01' } });

  // Wait for the fetchAPI function to resolve
  await screen.findByText('10:00');

  // Assert that the updated available times are displayed on the page
  expect(screen.getByText('10:00')).toBeInTheDocument();
});
