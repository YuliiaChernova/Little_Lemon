import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Booking from '../pages/Booking';


test('Renders the Booking button', () => {
  render(<BrowserRouter><Booking formState={{}} dispatch={() => {}} availabilityDispatch={() => {}} timeSlots={[]} /></BrowserRouter>);
  const bookingBtn = screen.getByRole('button', { name: /Book table/i });
  expect(bookingBtn).toBeInTheDocument();
})