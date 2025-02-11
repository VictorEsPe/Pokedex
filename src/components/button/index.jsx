import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { StyledButton } from './StyledButton';

const Button = (props) => {

  return (
    <StyledButton {...props} />
  );
};

export { Button };
