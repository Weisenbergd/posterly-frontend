import styled from "styled-components";
import {
  Link,
  useLocation,
  useNavigation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import useLogin from "../api/useLogin";
import userImage from "../assets/user.svg";
import logoutImage from "../assets/logout.svg";
import dotsImage from "../assets/dotsWhite.svg";
import ModalOverlay from "./ModalOverlay";
import LoginForm from "./LoginForm";
import Form from "./styling/Form";
import LogoutForm from "./ConfirmForm";
import ConfirmForm from "./ConfirmForm";

const Nav = ({ modal, setModal }) => {
  const { isLoggedIn, user, setLoggingOut, loggingOut } =
    useContext(UserContext);
  const { logoutMutation } = useLogin();

  const { pathname } = useLocation();

  return (
    <>
      <StyledNav className="nav">
        <div className="nav__icon box">
          <img src={dotsImage} alt="image of dots" />
        </div>
        <div className="nav__links box">
          <Link id={pathname === "/" ? "active" : ""}>home</Link>
          <Link id={pathname === "/about" ? "active" : ""} to="/about">
            about
          </Link>
          <Link id={pathname === "/blog" ? "active" : ""} to="/blog">
            blog
          </Link>
        </div>
        <div className="nav__options box">
          {isLoggedIn ? (
            <div>
              <img src={userImage} alt="user" />
              <p className="user">{user}</p>
              <button onClick={() => setLoggingOut(!loggingOut)}>
                <img src={logoutImage} alt="logout" />
              </button>

              <div className="nav__options--logout">
                <ModalOverlay modal={loggingOut} setModal={setLoggingOut}>
                  <ConfirmForm
                    type="logout"
                    className="card"
                    doSomething={logoutMutation}
                    setModal={setLoggingOut}
                  />
                </ModalOverlay>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setModal(!modal)}
              className="logout-btn card"
            >
              login
            </button>
          )}
        </div>
      </StyledNav>
    </>
  );
};

export default Nav;

export const StyledNav = styled.nav`
  background-color: var(--color-main-dark);
  color: var(--color-main-light);
  height: 64px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;

  .nav {
    &__links {
      display: flex;
      gap: 20px;
      opacity: 0.85;
      justify-content: center;

      @media screen and (max-width: 650px) {
        justify-content: flex-start;
        margin-left: 0.5rem;
      }

      a {
        color: inherit;
        text-decoration: none;
        font-size: 18px;
      }
    }

    &__icon {
      margin-left: 4rem;
      margin-right: auto;
      width: fit-content;
      @media screen and (max-width: 650px) {
        display: none !important;
      }
      & > svg {
        /* margin-left: 64px; */
      }
    }

    &__options {
      position: relative;
      margin-left: auto;
      margin-right: 4rem;

      @media screen and (max-width: 650px) {
        margin-right: 0.5rem;
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & .user {
          margin-right: 0.5rem;
        }
      }

      & > div,
      & > button {
        margin-left: auto;
      }

      .logout-btn {
        border: none;
        padding: 0.2rem 0.6rem;
        background-color: var(--color-main-light);
        color: var(--color-main-dark);
        font-size: 18px;
        cursor: pointer;
        display: grid;
        place-content: center;
        border-radius: 5px;
      }

      /* &--logout {
        position: absolute;
        top: 4rem;
        right: 4rem;
        color: black;
        height: 50px;
        display: flex;
        align-items: center;
        gap: 1rem;

        & div {
          display: flex;
          gap: 1rem;
        }

        & button {
          color: var(--color-main-light) !important;
          background-color: var(--color-main-dark) !important;
        }
      } */
    }
  }
  .box {
    display: flex;
    flex: 1;
  }
  #active {
    border-bottom: 2px solid;
  }
`;
