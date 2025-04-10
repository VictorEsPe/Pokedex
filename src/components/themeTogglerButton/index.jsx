import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { StyledThemeTogglerBtn } from './StyledThemeTogglerButton';

const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleSetTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  return (
    <StyledThemeTogglerBtn
      className="theme-toggler-btn"
      onClick={handleSetTheme}
    >
      <FontAwesomeIcon icon={faCircleHalfStroke} />
    </StyledThemeTogglerBtn>
  );
};

export { ThemeTogglerButton };
