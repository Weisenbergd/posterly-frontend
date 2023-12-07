import styled, { css } from "styled-components";

const Form = ({ type, children, ...props }) => {
  return (
    <StyledForm {...props} type={type}>
      {children}
    </StyledForm>
  );
};
export default Form;

const StyledForm = styled.form`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  background-color: var(--color-main-light);
  color: var(--color-main-dark);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  position: relative;

  @media screen and (max-width: 1100px) {
    top: 15%;
  }

  @media screen and (max-width: 650px) {
    top: 10%;
    width: 85vw;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 18px;

    & > * {
      font-size: 18px;
    }
  }

  button {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }

  textarea {
    resize: none;
    font-size: 18px;
  }

  ${(props) => {
    switch (props.type) {
      case "login":
        return css`
          height: 350px;
          width: 400px;
        `;

      case "post":
        return css`
          height: 600px;
          width: 500px;
        `;
    }
  }};
`;
