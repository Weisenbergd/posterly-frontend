import styled from "styled-components";
import Post from "../components/Post";
import { useGetPost } from "../api/useGetPosts";
import Title from "../components/Title";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import NewPostForm from "../components/PostForm";
import PostButton from "../components/styling/PostButton";
import backgroundImage from "../assets/background.svg";
import PageLoader from "../components/Loading";

const HomePage = () => {
  const { data, isPending, error } = useGetPost();
  const { user } = useContext(UserContext);

  const [hide, setHide] = useState(false);

  const [modal, setModal] = useState(false);

  if (isPending) return <PageLoader />;
  if (error) return <p>error</p>;

  return (
    <>
      <StyledImg className="background" src={backgroundImage} />
      <Title />

      <NewPostForm modal={modal} setModal={setModal} />

      <DevDiv>
        {!hide && (
          <>
            <p>login with:</p>
            <p>username: drew</p>
            <p>password: 123</p>
            <p>or feel free to make new login -- no verification</p>
            <p>only 1 page</p>
            <p>oldest posts get deleted when pushed out</p>
          </>
        )}

        <button onClick={() => setHide(!hide)}>
          {hide ? "show dev note" : "hide note"}
        </button>
      </DevDiv>

      {user && (
        <StyledDiv>
          <PostButton onClick={() => setModal(!modal)} className="author card">
            new post
          </PostButton>
        </StyledDiv>
      )}
      <StyledUl>
        {data.map((post) => {
          return (
            <li key={post._id}>
              <Post post={post} />
            </li>
          );
        })}
      </StyledUl>
    </>
  );
};

export default HomePage;

const DevDiv = styled.div`
  background-color: white;
  width: fit-content;
  position: absolute;
  top: 4rem;
  right: 0;
  border: 1px solid black;
`;

const StyledDiv = styled.div`
  position: initial;
  display: flex;
  justify-content: start;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 20rem;

  button {
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    position: initial;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    button {
      width: 100%;
    }
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 2rem;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 171px;
  right: 20px;
  z-index: -99;

  @media screen and (max-width: 1100px) {
    display: none;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
