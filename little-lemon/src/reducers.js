import { ACTION_TYPES } from './constants';

export const initialBookingState = {
  name: '',
  date: '',
  time: '',
  adults: '',
  children: '',
  email: '',
  phone: '',
  location: 'Outdoor',
};

export const initialAvailabilityState = {
  timeSlots: ['10:00 AM', '2:00 PM', '4:30PM', '8:00 PM'],
}

export function bookingReducer(state, action) {
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
      throw new Error('Unexpected action');
  }
};

export function availabilityReducer(state, action) {
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