import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader, Logo, ThemeTogglerBtn } from './StyledHeader';

const Header = ({componentRef}) => {
  return (
    <StyledHeader ref={componentRef}>
      <Logo>
        <img src="/Poké_Ball_icon.png" alt="Pokebola" />
        <h1>Pokédex</h1>
      </Logo>

      <ThemeTogglerBtn className="theme-toggler-btn">
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </ThemeTogglerBtn>
    </StyledHeader>
  );
};

export { Header };