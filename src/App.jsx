import { useState, useEffect, useRef } from 'react';
import { Header } from './components/header/'
import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components';

function App() {
  const headerHeightRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerHeightRef.current) {
      const height = headerHeightRef.current.getBoundingClientRect().height;

      setHeaderHeight(height);
    }
  }, []);

  return (
    <>
      <GlobalStyles marginTop={headerHeight} />
      <Header componentRef={headerHeightRef} />
      <AppRoutes />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    padding-top: ${props => props.marginTop}px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul li {
    list-style: none;
  }
`;

export default App;
