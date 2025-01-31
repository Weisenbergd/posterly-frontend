import { useGetSinglePost } from "../api/useGetSinglePost";
import { formatDate } from "../util/formatDate";
import styled from "styled-components";
import trashImage from "../assets/trash.svg";
import editImage from "../assets/edit.svg";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useDeletePost } from "../api/useDeletePost";
import PostForm from "./PostForm";
import DeleteEditDiv from "./styling/DeleteEditDiv";
import PostButton from "./styling/PostButton";
import ReplyForm from "./ReplyForm";
import ModalOverlay from "./ModalOverlay";
import ConfirmForm from "./ConfirmForm";

const DetailedPost = () => {
  return <p>test</p>;

  const { data: post, isLoading, error } = useGetSinglePost();
  const { user } = useContext(UserContext);
  const { deleteMutation } = useDeletePost(post);

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>something went wrong...</p>;

  return (
    <>
      <StyledDiv>
        <div className="post__meta">
          <h2>{post.title}</h2>

          <p className="post__meta--author author card">{post.author}</p>
          <p className="post__meta--date">{formatDate(post.datePublished)}</p>
          {post.isEdited && (
            <p className="post__meta--edited">
              edited {formatDate(post.dateEdited)}
            </p>
          )}
        </div>

        <div className="post__content">
          <p className="content">{post.content}</p>
        </div>

        {user === post.author && (
          <DeleteEditDiv className="test">
            <button onClick={() => setDeleteModal(!deleteModal)}>
              <img src={trashImage} alt="delete" />
            </button>

            <button onClick={() => setModal(!modal)}>
              <img src={editImage} alt="edit" />
            </button>
            {modal && (
              <PostForm
                post={post}
                type="edit"
                modal={modal}
                setModal={setModal}
              ></PostForm>
            )}
          </DeleteEditDiv>
        )}
        <ModalOverlay modal={deleteModal} setModal={setDeleteModal}>
          <ConfirmForm
            type="delete"
            doSomething={deleteMutation}
            setModal={setDeleteModal}
          />
        </ModalOverlay>

        <PostButton
          onClick={() => setReplyModal(!replyModal)}
          className="reply"
        >
          reply
        </PostButton>
        {replyModal && (
          <ReplyForm
            post={post}
            type="post"
            modal={replyModal}
            setModal={setReplyModal}
          ></ReplyForm>
        )}
      </StyledDiv>
    </>
  );
};
export default DetailedPost;

const StyledDiv = styled.div`
  color: var(--color-main-dark);
  margin-top: 120px;
  position: relative;
  margin-bottom: 12rem;
  max-width: 70rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -90px;
    left: -0.5rem;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.3);
  }

  .post {
    &__meta {
      display: flex;
      flex-direction: column;
      gap: 12px;

      h2 {
        font-size: 64px;
        margin-bottom: 1rem;
        line-height: 4.4rem;
        max-width: 80%;
        hyphens: auto;
      }

      p {
        font-size: 24px;
      }

      &--author {
      }

      &--date {
        opacity: 0.8;
      }

      &--edited {
        font-size: 16px !important;
        color: var(--color-main-dark);
        opacity: 0.8;
        position: absolute;
        bottom: -80px;
        right: 10px;
      }
    }

    &__content {
      /* margin-top: 44px;
      margin-left: 66px;
      hyphens: auto;
      font-size: 24px;
      line-height: 2.2rem;
      white-space: pre-wrap; */
      margin-top: 3.2rem;
      margin-left: 4rem;
      width: 90%;

      @media screen and (max-width: 1100px) {
        margin-left: 1.5rem;
      }

      @media screen and (max-width: 650px) {
        margin-left: 0;
      }
    }
  }

  .reply {
    position: absolute;
    right: 0;
    bottom: -10rem;
  }
`;
