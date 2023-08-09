import React, { useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import About from './pages/About';
import {
  bookingReducer, availabilityReducer,
  initialAvailabilityState, initialBookingState
} from './reducers';
import { ACTION_TYPES } from './constants';


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