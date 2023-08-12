import {
  mockedFormValue, mockedInitialState,
  mockedResetAction, mockedSubmitAction
} from './mocks';
const { bookingReducer } = require('../reducers');

test('Submit Form', () => {
  expect(bookingReducer(mockedInitialState, mockedSubmitAction)).toEqual(mockedFormValue);
});

test('Reset Form', () => {
  expect(bookingReducer(mockedInitialState, mockedResetAction)).toEqual(mockedInitialState);
});
