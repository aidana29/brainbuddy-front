import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import CustomContainer from "../components/PurpleContainer";
import CenteredContainer from "../components/CenteredContainer";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    return navigate("/login");
  };

  const handleSignUp = () => {
    return navigate("/signUp");
  };

  return (
    <CustomContainer>
      <CenteredContainer>
        <WelcomeWrap>
          <h1>Welcome to BrainBuddy!</h1>
          <h3>You need to register/login to use this app :)</h3>
          <Buttons>
            <CustomButton buttonText="Login" onClick={handleLogin} />
            <CustomButton buttonText="Sign Up" onClick={handleSignUp} />
          </Buttons>
        </WelcomeWrap>
      </CenteredContainer>
    </CustomContainer>
  );
};

const WelcomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-width: 60%;
  max-width: 60%;
  @media (max-width: 700px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export default Main;
