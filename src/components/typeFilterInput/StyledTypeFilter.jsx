import styled from 'styled-components';

const StyledSelect = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-end;
  font-family: 'IBM Plex Mono', sans-serif;
  font-size: 18px;
  width: 100vw;
  padding-right: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-right: 0;
    font-size: 15px;
  }

  & select {
    border: 1px solid lightgray;
    background-color: transparent;
    color: inherit;
    font-family: 'IBM Plex Mono', sans-serif;
    font-size: 15px;
    text-align: center;
    padding: 3px;
    cursor: pointer;

    @media (max-width: 600px) {
      width: 100%;
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    & option {
      background-color: ${props => props.theme.bgColor};
      font-size: inherit;
    }
  }
`;

export { StyledSelect };
