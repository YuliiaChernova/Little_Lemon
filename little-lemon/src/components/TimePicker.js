import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';

const TimePicker = ({ displayedTime, items, setFieldValue }) => {
  return (
    <Menu>
      <label for='time'>Booking Time*</label>
      <MenuButton id='time'>
        {displayedTime}
      </MenuButton>
      <MenuList defaultValue={items[0]} title='' type='radio'>
        {items.map(i => <MenuItem value={i} key={Math.random()} onClick={setFieldValue}>{i}</MenuItem>)}
      </MenuList>
    </Menu>
  )
};

export default TimePicker;