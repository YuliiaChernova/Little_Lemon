import { ACTION_TYPES } from '../constants';
import { initialBookingState  } from '../reducers';
const { bookingReducer } = require('../reducers');

const mockedFormValue = {
  name: 'Test name',
  date: 'Test date',
  time: 'Test time',
  adults: 'Test adults',
  children: 'Test children',
  email: 'Test email',
  phone: 'Test phone',
  location: 'Test location',
};

const mockedInitialState = {...initialBookingState}

const mockedSubmitAction = {
  type: ACTION_TYPES.CONFIRM_BOOKING,
  payload: mockedFormValue
};

const mockedResetAction = {
  type: ACTION_TYPES.RESET_FORM,
  payload: {}
};

test('Submit Form', () => {
  expect(bookingReducer(mockedInitialState, mockedSubmitAction)).toEqual(mockedFormValue);
});

test('Reset Form', () => {
  expect(bookingReducer(mockedInitialState, mockedResetAction)).toEqual(mockedInitialState);
});
