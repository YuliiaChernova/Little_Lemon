import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';

const Dialog = ({ items, children }) => {
  return (
    <Menu>
      <MenuButton>
        {children}
      </MenuButton>
      <MenuList>
        {items.map(i => <MenuItem key={Math.random()}>{i}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default Dialog;