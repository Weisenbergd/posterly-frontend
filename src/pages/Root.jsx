import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import ModalOverlay from "../components/ModalOverlay";
import { useState } from "react";
import backgroundImage from "../assets/background.svg";

import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const Root = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Nav modal={modal} setModal={setModal} />
      <ModalOverlay modal={modal} setModal={setModal}>
        <LoginForm />
      </ModalOverlay>
      <main>
        {/* <img className="background" src={backgroundImage} /> */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
