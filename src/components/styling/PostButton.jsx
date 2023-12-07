import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
export default Button;

const StyledButton = styled.button`
  color: var(--color-main-light);
  background-color: var(--color-main-dark) !important;
  padding: 0.8rem 1.5rem;
  width: fit-content;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 18px;
`;
