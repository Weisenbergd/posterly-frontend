import styled from "styled-components";
import Reply from "./Reply";
import { useGetSinglePost } from "../api/useGetSinglePost";

const ReplyList = () => {
  const { data: post, isLoading, error } = useGetSinglePost();

  if (isLoading) return <p>loading...</p>;

  if (post.replies.length === 0) return;

  return (
    <StyledUl className="card">
      {post.replies.map((reply) => {
        return <Reply key={reply._id} post={post} reply={reply} />;
      })}
    </StyledUl>
  );
};
export default ReplyList;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
