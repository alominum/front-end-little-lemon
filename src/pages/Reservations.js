// Reservations.js
import React, { useState } from 'react';
import './CSS/Reservations.css';
import BookForm from '../components/BookingForm';
import Popup from '../components/Popup';
import { useNavigate } from 'react-router-dom';
import pages from '../utils/pages';
import { useReducer } from 'react';
import { fetchAPI } from '../utils/Api';

const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every((value) => value);

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [...initialAvailableTimes, ...fetchAPI(new Date())];

  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div data-testid="reservations-component" className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table reservation</h1>
        <BookForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>

      {isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
            navigate(pages.get('home').path);
          }}
          title="Reservation Confirmed!"
          description="Thank you for selecting Little Lemon! Your reservation has been successfully confirmed. A confirmation email with all the details has been sent to you. We look forward to welcoming you soon!"
        />
      )}
    </div>
  );
};

export default Reservations;
