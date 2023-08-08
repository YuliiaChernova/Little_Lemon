import React from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

const RadioComponent = ({currentValue, setFieldValue, values, name}) => {
  return (
    <RadioGroup name={name} onChange={setFieldValue} value={currentValue}>
    <Stack direction='column'>
      {values.map(v => <Radio value={v} key={Math.random()}>{v}</Radio>)}
    </Stack>
  </RadioGroup>
  )
};

export default RadioComponent;