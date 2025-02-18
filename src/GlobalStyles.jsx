import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    
}

  body {
    font-family: 'Roboto', sans-serif;
    padding-top: ${props => props.marginTop}px;
    background-color: ${props => props.theme.bgColor};

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul li {
    list-style: none;
  }
`;

export { GlobalStyles };
