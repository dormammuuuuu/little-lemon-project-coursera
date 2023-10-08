import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {BookingForm} from '../components';


test('handleGuestsChange correctly updates guests', async () => {
    const handleGuestsChange = jest.fn();
    render(<BookingForm handleGuestsChange={handleGuestsChange} availableTimes={["10:00", "11:00", "12:00"]} />);
    const dateInput = screen.getByLabelText('Choose Date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', expect.stringContaining(new Date().toISOString().split('T')[0]));
    // Test the time select
    const timeSelect = screen.getByLabelText('Choose Time');
    expect(timeSelect).toBeInTheDocument();

    // Test the guests input
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    // Test the occasion select
    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toBeInTheDocument();
  });