import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout';
import TimePicker from '../components/TimePicker';
import FieldError from '../components/FieldError';
import RadioComponent from '../components/Radio';
import TextInput from '../components/TextInput';
import useSubmit from '../hooks/useSubmit';
import { ACTION_TYPES } from '../constants';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Booking = ({
  formState, dispatch,
  availabilityDispatch, timeSlots
}) => {
  const locationValues = ['Outdoor', 'Indoor'];

  const { response, submit } = useSubmit();
  const navigate = useNavigate();

  const [submitError, setSubmitError] = useState('');

  const formik = useFormik({
    initialValues: {
      ...formState
    },
    onSubmit: (values) => {
      submit('', values);
      dispatch({ type: ACTION_TYPES.CONFIRM_BOOKING, payload: values });
      availabilityDispatch({ type: ACTION_TYPES.TRACK_TIME_SLOTS, payload: values.time })
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
      adults: Yup.number().min(1).max(10).required('Required'),
      children: Yup.number().min(0).max(10).required('Required'),
      date: Yup.date('Invalid date').required('Required'),
      time: Yup.string().required('Required')
    })
  });

  const isError = (field) => !!formik.errors[field] && formik.touched[field];

  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        formik.resetForm();
        navigate('/confirmation');
      }
      setSubmitError(response.message)
    }
  }, [response]);

  return (
    <Layout>
      <main>
        <form className='bookingContainer' onSubmit={formik.handleSubmit}>
          <TextInput inputName='name' label='Name*' testId='name-input' {...formik.getFieldProps('name')} />
          {isError('name') && <FieldError>{formik.errors.name}</FieldError>}
          <TextInput inputName='phone' label='Phone*' testId='phone-input' {...formik.getFieldProps('phone')} />
          {isError('phone') && <FieldError>{formik.errors.phone}</FieldError>}
          <TextInput inputName='email' label='Email*' testId='email-input' {...formik.getFieldProps('email')} />
          {isError('email') && <FieldError>{formik.errors.email}</FieldError>}
          <div className='dateTime'>
            <div className='date'>
              <label for='date'>Booking date*</label>
              <input type='text' id='date' name='date' {...formik.getFieldProps('date')} />
            </div>
            <div className='timePicker'>
              <TimePicker
                displayedTime={formik.values.time}
                items={timeSlots}
                setFieldValue={e => formik.setFieldValue('time', e.target.value)}
              />
            </div>
          </div>
          <div className='dateTime dateTime-error'>
            {isError('time') && <FieldError>{formik.errors.time}</FieldError>}
            {isError('date') && <FieldError>{formik.errors.date}</FieldError>}
          </div>
          <TextInput inputName='adults' label='Number of adults*' testId='adults-input' {...formik.getFieldProps('adults')} />
          {isError('adults') && <FieldError>{formik.errors.adults}</FieldError>}
          <TextInput inputName='children' label='Number of children*' testId='children-input' {...formik.getFieldProps('children')} />
          {isError('children') && <FieldError>{formik.errors.children}</FieldError>}
          <RadioComponent currentValue={formik.values.location} setFieldValue={e => formik.setFieldValue('location', e)} values={locationValues} name='locationRadio' />
          {submitError && <FieldError>{submitError}</FieldError>}
          <button className='primaryButton' data-testid='form-submit-btn'>Book table</button>
        </form>
      </main>
    </Layout>
  )
};

export default Booking;