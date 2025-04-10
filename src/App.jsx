import React, { useContext } from 'react';
import { Header } from './components/header/';
import { AppRoutes } from './routes';
import { ThemeContext } from './contexts/theme-context';
import { GlobalStyles } from './GlobalStyles';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyles theme={theme}/>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
