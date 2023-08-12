import { fireEvent, render, screen, } from '@testing-library/react';
import { useFormik } from 'formik';
import { BrowserRouter } from 'react-router-dom';
import Booking from '../pages/Booking';
import { mockedInitialState } from './mocks';


test('Renders the Booking button', () => {
  render(<BrowserRouter><Booking formState={{}} dispatch={() => {}} availabilityDispatch={() => {}} timeSlots={[]} /></BrowserRouter>);
  const bookingBtn = screen.getByRole('button', { name: /Book table/i });
  expect(bookingBtn).toBeInTheDocument();
});

test('Shows error after blur if input unfilled', async () => {
  render(<BrowserRouter><Booking formState={{mockedInitialState}} dispatch={() => {}} availabilityDispatch={() => {}} timeSlots={[]} /></BrowserRouter>);
  const nameInput = screen.getByTestId('name-input');
  fireEvent.blur(nameInput);
  const error = await screen.findByTestId('field-error');
  expect(error).toBeInTheDocument();
});

test('Fails to submit form if inputs are unfilled', async () => {
  render(<BrowserRouter><Booking timeSlots={[]} /></BrowserRouter>);
  const dispatch = jest.fn();
  const submitButton = screen.getByTestId('form-submit-btn');
  fireEvent.click(submitButton);
  expect(dispatch).not.toHaveBeenCalled();
})