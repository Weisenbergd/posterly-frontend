import styled from "styled-components";
import dotsImage from "../assets/dotsBlack.svg";

const Title = () => {
  return (
    <StyleDiv>
      <h1>POSTERLY</h1>
      <div>
        <img src={dotsImage} />
      </div>
    </StyleDiv>
  );
};
export default Title;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8rem;
  font-size: 64px;
  letter-spacing: 2.5px;
  font-weight: 400;
  margin-bottom: 72px;
  left: -4.5rem;
  position: relative;

  @media screen and (max-width: 650px) {
    left: 0;
    flex-direction: column;
    gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  div {
    display: flex;

    img {
      fill: black;
    }
  }
`;
