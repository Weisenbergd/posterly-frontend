import styled from "styled-components";
import trashImage from "../assets/trash.svg";
import editImage from "../assets/edit.svg";
import { useContext, useState } from "react";
import DeleteEditDiv from "./styling/DeleteEditDiv";
import { useDeleteReply } from "../api/useDeleteReply";
import { UserContext } from "../context/UserContext";
import ReplyForm from "./ReplyForm";
import ModalOverlay from "./ModalOverlay";
import ConfirmForm from "./ConfirmForm";

const Reply = ({ reply, post }) => {
  const [modal, setModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);
  const { deleteReplyMutation } = useDeleteReply(reply, post);
  const { user } = useContext(UserContext);

  return (
    <>
      <StyledLi className="reply" key={reply._id}>
        <div>
          <p className="author card reply__author">{reply.author}</p>
          {/* <DeleteEditReplyForm post={post} reply={reply} /> */}
        </div>
        <p className="reply__content content">{reply.content}</p>
        {user === reply.author && (
          <DeleteEditDiv>
            <button onClick={() => setModal(!modal)}>
              <img src={trashImage} alt="delete" />
            </button>
            <button onClick={() => setReplyModal(!replyModal)}>
              <img src={editImage} alt="edit" />
            </button>
          </DeleteEditDiv>
        )}

        {replyModal && (
          <ReplyForm
            type="edit"
            reply={reply}
            post={post}
            modal={replyModal}
            setModal={setReplyModal}
          />
        )}
      </StyledLi>
      <ModalOverlay modal={modal} setModal={setModal}>
        <ConfirmForm
          type="delete"
          doSomething={deleteReplyMutation}
          setModal={setModal}
        />
      </ModalOverlay>
    </>
  );
};
export default Reply;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 4rem;
  position: relative;
  font-size: 24px;
  max-width: 70rem;

  .reply__content {
    max-width: 90%;
  }

  div {
    bottom: 0.5rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: -0.5rem;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.3);
  }
`;
