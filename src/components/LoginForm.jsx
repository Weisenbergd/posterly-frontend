import styled from "styled-components";
import useLogin from "../api/useLogin";
import Form from "./styling/Form";
import PostButton from "./styling/PostButton";
import { Link, redirect } from "react-router-dom";
import { useState } from "react";
import useSignup from "../api/useSignup";

const LoginForm = () => {
  const [signup, setSignup] = useState(false);

  const { loginMutation, logoutMutation, modal, setModal } = useLogin();
  const { signupMutation } = useSignup();

  return (
    <Form
      type="login"
      onSubmit={signup ? signupMutation.mutate : loginMutation.mutate}
      className="form card"
    >
      <div>
        <label htmlFor="username">username</label>
        <input id="username"></input>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password"></input>
      </div>
      {signup && (
        <div>
          <label htmlFor="passwordConfirm">confirm password</label>
          <input id="passwordConfirm"></input>
        </div>
      )}
      {loginMutation.isError && !signup && (
        <p className="error">{loginMutation.error.response.data.message}</p>
      )}
      {signupMutation.isError && signup && (
        <p>{signupMutation.error.response.data.message}</p>
      )}

      <StyledDiv>
        <p>{signup ? "already a user?" : "new user?"}</p>
        <button
          type="button"
          onClick={() => setSignup(!signup)}
          className="signup__button"
        >
          {signup ? "login" : "signup"}
        </button>
      </StyledDiv>
      <PostButton className="card author">
        {signup ? "signup" : "login"}
      </PostButton>
    </Form>
  );
};
export default LoginForm;

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 2rem;

  button {
    all: initial;
    font-size: 20px;
    color: blue;
    cursor: pointer;
    width: fit-content;

    &:focus {
      border-bottom: 1px solid blue;
      margin-bottom: -1px;
    }

    &:hover {
      border: none;
      margin-bottom: 0;
    }
  }
`;
