import styled from "styled-components";
import PostButton from "./styling/PostButton.jsx";

const ConfirmForm = ({ type, doSomething, setModal }) => {
  return (
    <StyledDiv>
      <p>
        {type === "logout"
          ? "are you sure you want to log out?"
          : "are you sure you want to delete this post"}
      </p>
      <div>
        <PostButton onClick={doSomething.mutate}>yes</PostButton>
        <PostButton className="logout" onClick={() => setModal(false)}>
          no
        </PostButton>
      </div>
    </StyledDiv>
  );
};
export default ConfirmForm;

const StyledDiv = styled.div`
  background-color: white;
  position: absolute;
  width: 20rem;
  height: 20rem;
  transform: translateX(-50%);
  left: 50%;
  top: 10rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 24px;
  gap: 2rem;
  background-color: var(--color-main-light);
  border-radius: 5px;

  p {
    color: var(--color-main-dark);
    line-height: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    button {
      width: 50%;
      padding: 1rem;
      color: white;
    }

    .logout {
      background-color: darkgrey !important;
      color: var(--color-main-dark);
    }
  }
`;
