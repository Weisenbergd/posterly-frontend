import { usePostPost } from "../api/usePostPost";
import styled from "styled-components";
import ModalOverlay from "./ModalOverlay";
import Form from "./styling/Form";
import { useEditPost } from "../api/useEditPost";
import PostButton from "./styling/PostButton";

const PostForm = ({ modal, setModal, type, post }) => {
  const postMutation = usePostPost();
  const { editPostMutation } = useEditPost(post);

  return (
    <StyledDiv>
      <ModalOverlay className="modal" setModal={setModal} modal={modal}>
        <Form
          className="card"
          type="post"
          onSubmit={
            type === "edit" ? editPostMutation.mutate : postMutation.mutate
          }
        >
          {!type && (
            <div>
              <label>title</label>
              <input></input>
            </div>
          )}
          <div>
            <label>content</label>
            <textarea
              defaultValue={type === "edit" ? post.content : ""}
              rows={16}
            ></textarea>
          </div>
          {postMutation.isError && (
            <p className="error">{postMutation.error.response.data.message}</p>
          )}
          {editPostMutation.isError && (
            <p className="error">
              {editPostMutation.error.response.data.message}
            </p>
          )}
          <PostButton className="author">
            {type === "edit" ? "edit" : "post"}
          </PostButton>
        </Form>
      </ModalOverlay>
    </StyledDiv>
  );
};
export default PostForm;

const StyledDiv = styled.div``;
