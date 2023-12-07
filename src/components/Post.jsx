import { useDeletePost } from "../api/useDeletePost";
import styled from "styled-components";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import trashImage from "../assets/trash.svg";
import LogoutForm from "./ConfirmForm";
import ModalOverlay from "./ModalOverlay";
import ConfirmForm from "./ConfirmForm";

const Post = ({ post }) => {
  const { deleteMutation } = useDeletePost(post);
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);

  return (
    <>
      <StyledDiv className="card">
        <div className="content__title">
          <Link to={`post/${post._id}`}>{post.title}</Link>
        </div>
        {user === post.author && (
          <>
            <button onClick={() => setModal(!modal)}>
              <img src={trashImage} alt="delete" />
            </button>
          </>
        )}
      </StyledDiv>
      <ModalOverlay modal={modal} setModal={setModal}>
        <ConfirmForm
          type="delete"
          doSomething={deleteMutation}
          setModal={setModal}
        />
      </ModalOverlay>
    </>
  );
};
export default Post;

const StyledDiv = styled.div`
  background-color: white;
  padding: 1rem;
  width: 600px;
  font-size: 24px;
  filter: drop-shadow(rgba(0, 0, 0, 0.17) 3px 3px 3px);
  display: flex;

  @media screen and (max-width: 650px) {
    width: 90vw;
  }

  button {
    border: none;
    background-color: inherit;
    margin-left: auto;
    cursor: pointer;
  }

  div > a {
    text-decoration: none;
    color: var(--color-main-dark);
    line-height: 2rem;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  z-index: 9999 !important;
  color: red;
  width: 400px;
  height: 400px;
`;
