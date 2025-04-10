import { Button } from '../button';
import styled from 'styled-components';

const StyledThemeTogglerBtn = styled(Button)`
  font-size: 25px;
  transition: all 0.2s ease-in-out;
  color: inherit;

  &:hover {
    transform: scale(1.12);
    opacity: 0.6;
  }
`;

export { StyledThemeTogglerBtn };