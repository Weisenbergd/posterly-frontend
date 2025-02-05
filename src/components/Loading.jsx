import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const PageLoader = () => {
  return (
    <LoaderContainer>
      <Spinner
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </LoaderContainer>
  );
};

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* backdrop-filter: blur(10px); */
  z-index: 9999;
`;

const Spinner = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  border: 4px solid var(--color-main-light);
  border-top-color: var(--color-main-dark);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default PageLoader;
