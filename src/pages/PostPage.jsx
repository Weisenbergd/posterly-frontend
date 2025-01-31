import DetailedPost from "../components/DetailedPost";
import ReplyList from "../components/ReplyList";
import backgroundImage from "../assets/background.svg";
import styled from "styled-components";

const PostPage = () => {
  // const { data: post, isLoading, error } = useGetSinglePost();
  return (
    <>
      <p>test</p>
      {/* <StyledImg className="background" src={backgroundImage} />
      <DetailedPost />
      <ReplyList /> */}
    </>
  );
};
export default PostPage;

const StyledImg = styled.img`
  position: absolute;
  top: 171px;
  right: 20px;
  z-index: -99;

  @media screen and (max-width: 1100px) {
    top: 50px;
    right: -30px;
    transform: scale(80%);
  }

  @media screen and (max-width: 650px) {
    transform: scale(50%);
    top: -20px;
    right: -100px;
  }
`;
