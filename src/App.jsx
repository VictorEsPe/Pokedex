import { useState, useEffect, useRef } from 'react';
import { Header } from './components/header/Header';
import { PokemonCard } from './components/pokemonCard/PokemonCard';
import { createGlobalStyle } from 'styled-components';

function App() {
  const headerHeightRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if(headerHeightRef.current){
      const height = headerHeightRef.current.getBoundingClientRect().height;

      setHeaderHeight(height)
    }
  }, [])

  return (
    <>
      <GlobalStyles marginTop={headerHeight}/>
      <Header componentRef={headerHeightRef}/>
      <PokemonCard />
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

`

export default App;
