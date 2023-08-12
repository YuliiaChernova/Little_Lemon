import React from 'react';

const FieldError = ({children}) => {
  return (
    <div className='fieldError' data-testid='field-error'>{children}</div>
  )
};

export default FieldError;