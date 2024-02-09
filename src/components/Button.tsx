import React from "react";
import styled from "styled-components";

const CustomButton = (props: any) => {
  return (
    <StyledButton onClick={props.onClick} disabled={props.disabled}>
      {props.buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  max-width: 40%;
  min-width: 40%;
  box-sizing: border-box;
  height: 50px;
  color: #685bda;
  border-radius: 40px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background-color: transparent;
    border: solid 2px white;
    color: white;
    transition: 0.2s;
  }
  @media (max-width: 700px) {
    max-width: 50%;
    min-width: 50%;
    height: 50px;
    margin: 20px;
  }
`;

export default CustomButton;
