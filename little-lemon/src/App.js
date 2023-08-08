import React, { useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import About from './pages/About';
import { ACTION_TYPES } from './constants';

const initialBookingState = {
  name: '',
  date: '',
  time: '',
  adults: '',
  children: '',
  email: '',
  phone: '',
  location: 'Outdoor',
};

const initialAvailabilityState = {
  timeSlots: ['10:00 AM', '2:00 PM', '4:30PM', '8:00 PM'],
}

function bookingReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.CONFIRM_BOOKING:
      return {
        ...state,
        ...action.payload
      };
    case ACTION_TYPES.RESET_FORM:
      return {
        ...state,
        ...initialBookingState
      }
    default:
      throw new Error();
  }
};

function availabilityReducer(state, action) {
  switch(action.type) {
    case ACTION_TYPES.TRACK_TIME_SLOTS:
      return {
        ...state,
        timeSlots: state.timeSlots.filter(i => i !== action.payload)
      }
    default:
      throw new Error();
  };

}


function App() {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);
  const [availabilityState, availabilityDispatch] = useReducer(availabilityReducer, initialAvailabilityState);
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/booking' element={
            <Booking
              formState={state}
              dispatch={dispatch}
              availabilityDispatch={availabilityDispatch}
              timeSlots={availabilityState.timeSlots}
            />} />
          <Route path='/confirmation' element={<Confirmation bookingDetails={state} resetForm={() => dispatch({ type: ACTION_TYPES.RESET_FORM })}/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;