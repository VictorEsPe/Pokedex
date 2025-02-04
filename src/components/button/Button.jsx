import { StyledButton } from "./StyledButton";

const Button = ({children, onClick, className}) => {
  return (
    <StyledButton onClick={onClick} className={className}>{children}</StyledButton>  
  );
}

export { Button };