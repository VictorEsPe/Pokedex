import { Button } from '../button/Button';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: 0 1px 10px lightgray;
  background-color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & img {
    width: 30px;
    height: 30px;
  }
`;

const ThemeTogglerBtn = styled(Button)`
  font-size: 25px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.12);
    opacity: .6;
  }
`;

export { StyledHeader, Logo, ThemeTogglerBtn };
