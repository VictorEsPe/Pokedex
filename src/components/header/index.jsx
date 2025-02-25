import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader, StyledLogo, StyledThemeTogglerBtn } from './StyledHeader';

const Header = ({ componentRef }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <StyledHeader ref={componentRef} theme={theme}>
      <StyledLogo>
        <img src="/Poké_Ball_icon.png" alt="Pokebola" />
        <h1>Pokédex</h1>
      </StyledLogo>

      <StyledThemeTogglerBtn
        className="theme-toggler-btn"
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </StyledThemeTogglerBtn>
    </StyledHeader>
  );
};

export { Header };
