import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import {
  StyledHeader,
  StyledLogo,
} from './StyledHeader';
import { ThemeTogglerButton } from '../themeTogglerButton';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledHeader theme={theme}>
      <StyledLogo>
        <img src="src/assets/icons/Poké_Ball_icon.png" alt="Pokebola" />
        <h1>Pokédex</h1>
      </StyledLogo>

      <ThemeTogglerButton />

    </StyledHeader>
  );
};

export { Header };
