import { createContext, useState } from 'react';

const themes = {
  light: {
    textColor: '#000000',
    bgColor: '#ffffff',
    button: {
      bgColor: '#ff0000e2',
      hover: '#dd0000'
    }
  },
  dark: {
    textColor: '#e0e0e0',
    bgColor: '#0d1117',
    button: {
      bgColor: '#d32f2f',
      hover: '#b71c1c'
    }
  },
};

const ThemeContext = createContext({});

const ThemeProvider = props => {
  const [theme, setTheme] = useState(themes.light)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { themes, ThemeProvider, ThemeContext };
