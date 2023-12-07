import styled from "styled-components";
import Post from "../components/Post";
import { useGetPost } from "../api/useGetPosts";
import Title from "../components/Title";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import NewPostForm from "../components/PostForm";
import PostButton from "../components/styling/PostButton";
import backgroundImage from "../assets/background.svg";

const HomePage = () => {
  const { data, isPending, error } = useGetPost();

  const [modal, setModal] = useState(false);

  if (isPending) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <StyledImg className="background" src={backgroundImage} />
      <Title />

      <StyledDiv>
        <PostButton onClick={() => setModal(!modal)} className="author card">
          new post
        </PostButton>
      </StyledDiv>

      <NewPostForm modal={modal} setModal={setModal} />

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

const StyledDiv = styled.div`
  position: absolute;
  right: 3.8rem;
  top: 6rem;

  @media screen and (max-width: 650px) {
    position: initial;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    button {
      width: 80%;
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
