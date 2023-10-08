import React from 'react';

const BookingForm = ({ date, time, guests, occasion, availableTimes, handleDateChange, handleTimeChange, handleGuestsChange, handleOccasionChange, handleSubmit }) => {
  return (
    <>
      <form className='max-w-xl mx-auto my-28 px-5' onSubmit={handleSubmit}>
        <div>
          <h1 className='text-3xl font-semibold text-center mb-6'>Make a reservation</h1>
        </div>
        <div className="mb-6">
          <label htmlFor="res-date" className="block mb-2 text-sm font-medium text-gray-900">Choose Date</label>
          <input type="date" id="res-date" value={date} onChange={(e) => handleDateChange(e.target.value)} min={new Date().toISOString().split('T')[0]} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="res-time" className="block mb-2 text-sm font-medium text-gray-900">Choose Time</label>
          <select id="res-time" value={time} onChange={(e) => handleTimeChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="17:00" required>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="guests" className="block mb-2 text-sm font-medium text-gray-900">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => handleGuestsChange(parseInt(e.target.value, 10))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <div className="mb-6">
          <label htmlFor="occasion" className="block mb-2 text-sm font-medium text-gray-900">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => handleOccasionChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <div className="mt-6 w-full">
          <input type="submit" value="Make Your reservation" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0 " />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
