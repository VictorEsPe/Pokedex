import React, { useState, useEffect, useRef, useContext } from 'react';
import { Header } from './components/header/';
import { AppRoutes } from './pages/routes';
import { ThemeContext } from './contexts/theme-context';
import { GlobalStyles } from './GlobalStyles';

function App() {
  const headerHeightRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (headerHeightRef.current) {
      const height = headerHeightRef.current.getBoundingClientRect().height;
     
      setHeaderHeight(height);
    }
  }, []);

  return (
    <>
      <GlobalStyles marginTop={headerHeight} theme={theme}/>
      <Header componentRef={headerHeightRef} />
      <AppRoutes />
    </>
  );
}

export default App;
