import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.361);
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & h1 {
    font-family: 'VT323', sans-serif;
    font-size: 40px;
  }
`;

export { StyledHeader, StyledLogo };
