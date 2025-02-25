import styled from 'styled-components';

const StyledSelect = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-end;
  font-family: 'VT323', sans-serif;
  font-size: 24px;
  width: 100vw;
  padding-right: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-right: 0;
    font-size: 21px;
  }

  & select {
    border: 1px solid lightgray;
    background-color: transparent;
    color: inherit;
    font-family: 'VT323', sans-serif;
    font-size: 20px;
    text-align: center;
    padding: 3px;

    @media (max-width: 600px) {
      width: 100%;
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    & option {
      background-color: ${props => props.theme.bgColor};
      font-size: 18px;
    }
  }
`;

export { StyledSelect };
