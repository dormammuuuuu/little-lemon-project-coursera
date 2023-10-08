import React, { useReducer, useEffect } from 'react';
import { BookingForm, Footer, Header } from '../components';
import { fetchAPI, submitAPI } from '../api/mockAPI';
import { Link, useNavigate } from 'react-router-dom';
const initialState = {
  selectedDate: new Date().toISOString().split('T')[0],
  availableTimes: ['10:00'],
  selectedTime: '',
  selectedGuests: 1,
  selectedOccasion: 'Birthday',
};

const reducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'UPDATE_DATE':
      return {
        ...state,
        selectedDate: action.payload,
      };
    case 'UPDATE_TIMES':
      return {
        ...state,
        availableTimes: action.payload,
      };
    case 'UPDATE_TIME':
      return {
        ...state,
        selectedTime: action.payload,
      };
    case 'UPDATE_GUESTS':
      return {
        ...state,
        selectedGuests: action.payload,
      };
    case 'UPDATE_OCCASION':
      return {
        ...state,
        selectedOccasion: action.payload,
      };
    default:
      return state;
  }
};

const BookingPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedDate, availableTimes, selectedTime, selectedGuests, selectedOccasion } = state;
  const navigate = useNavigate();

  // Function to fetch available times from the API
  const fetchAvailableTimes = async (date) => {
    try {
      const times = await fetchAPI(date);
      dispatch({ type: 'UPDATE_TIMES', payload: times });
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  useEffect(() => {
    // Fetch available times for today when the component mounts
    const today = new Date().toISOString().split('T')[0];
    fetchAvailableTimes(today);
  }, []);

  const handleDateChange = (date) => {
    console.log('event', date);
    if (date) {
      dispatch({ type: 'UPDATE_DATE', payload: date });
      fetchAvailableTimes(date);
    }
  };

  const handleTimeChange = (time) => {
    dispatch({ type: 'UPDATE_TIME', payload: time });
  };

  const handleGuestsChange = (guests) => {
    if (guests > 10) {
      guests = 10;
    } else if (guests < 1) {
      guests = 1;
    }
    dispatch({ type: 'UPDATE_GUESTS', payload: guests });
  };

  const handleOccasionChange = (occasion) => {
    dispatch({ type: 'UPDATE_OCCASION', payload: occasion });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      date: selectedDate,
      time: selectedTime,
      guests: selectedGuests,
      occasion: selectedOccasion,
    };
    try {
      const result = await submitAPI(formData);
      if (result) {
        console.log('Reservation submitted successfully');
        // Navigate to the confirmation page
        navigate('confirmed');
      } else {
        console.error('Reservation submission failed');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <>
      <Header />
      <BookingForm date={selectedDate} time={selectedTime} guests={selectedGuests} occasion={selectedOccasion} availableTimes={availableTimes} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} handleGuestsChange={handleGuestsChange} handleOccasionChange={handleOccasionChange} handleSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default BookingPage;
