import { initialBookingState  } from '../reducers';
import { ACTION_TYPES } from '../constants';

export const mockedFormValue = {
  name: 'Test name',
  date: 'Test date',
  time: 'Test time',
  adults: 'Test adults',
  children: 'Test children',
  email: 'Test email',
  phone: 'Test phone',
  location: 'Test location',
};

export const mockedInitialState = {...initialBookingState};

export const mockedSubmitAction = {
  type: ACTION_TYPES.CONFIRM_BOOKING,
  payload: mockedFormValue
};

export const mockedResetAction = {
  type: ACTION_TYPES.RESET_FORM,
  payload: {}
};

