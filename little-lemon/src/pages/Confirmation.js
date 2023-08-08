import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Confirmation = ({ bookingDetails, resetForm }) => {
  return (
    <Layout>
      <main>
        <div className='bookingContainer'>
          <h2 className='header'>Congratulations!</h2>
          <h2 className='header'>Your booking is confirmed!</h2>
          <p>Your booking details:</p>
          <p>Booked for: {bookingDetails.name}</p>
          <p>Date: {bookingDetails.date}</p>
          <p>Time: {bookingDetails.time}</p>
          <p>Number of adults: {bookingDetails.adults}</p>
          <p>Number of children: {bookingDetails.children}</p>
          <p>Location: {bookingDetails.location}</p>
          <p>Contact phone: {bookingDetails.phone}</p>
          <p>Contact email: {bookingDetails.email}</p>
          <Link to='/booking'><button className='primaryButton'>Update</button></Link>
          <Link to='/booking'><button className='primaryButton'>Cancel</button></Link>
          <Link to='/booking'><button className='primaryButton' onClick={resetForm}>New booking</button></Link>
        </div>
      </main>
    </Layout>
  )
};

export default Confirmation;