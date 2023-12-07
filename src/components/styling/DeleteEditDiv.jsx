import styled from "styled-components";

const DeleteEditDiv = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
export default DeleteEditDiv;

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: -5rem;
  left: -0.4rem;
  gap: 0.2rem;

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
`;
