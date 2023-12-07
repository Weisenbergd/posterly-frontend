import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";

const ModalOverlay = ({ children, modal, setModal, ...props }) => {
  // if (modal) document.body.classList.add("active-modal");

  function toggleModal(e) {
    if (e.target.id === "modal" || e.target.id === "link") {
      setModal(false);
      document.body.classList.remove("active-modal");
    }
  }

  if (modal)
    return (
      <StyledDiv id="modal" onClick={toggleModal} {...props}>
        {children}
      </StyledDiv>
    );
};
export default ModalOverlay;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  backdrop-filter: blur(12px) brightness(70%);
`;
