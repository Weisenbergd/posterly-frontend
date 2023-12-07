import { useContext, useState } from "react";
import { usePostReply } from "../api/usePostReply";
import Form from "./styling/Form";
import ModalOverlay from "./ModalOverlay";
import PostButton from "./styling/PostButton";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { useEditReply } from "../api/useEditReply";

const ReplyForm = ({ type, reply, post, modal, setModal }) => {
  const { postReplyMutation } = usePostReply();
  const { editReplyMutation } = useEditReply(post, reply);

  return (
    <StyledDiv>
      <ModalOverlay className="modal" setModal={setModal} modal={modal}>
        <Form
          onSubmit={
            type === "edit"
              ? editReplyMutation.mutate
              : postReplyMutation.mutate
          }
          className="card"
          type="post"
        >
          <div>
            <label>content</label>
            <textarea
              defaultValue={type === "edit" ? reply.content : ""}
              rows={16}
            ></textarea>
            {editReplyMutation.isError && (
              <p className="error">
                {editReplyMutation.error.response.data.message}
              </p>
            )}
            {postReplyMutation.isError && (
              <p className="error">
                {postReplyMutation.error.response.data.message}
              </p>
            )}
          </div>
          <PostButton className="author">
            {type === "edit" ? "edit" : "reply"}
          </PostButton>
        </Form>
      </ModalOverlay>
    </StyledDiv>
  );
};

const StyledDiv = styled.div``;

export default ReplyForm;
