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
  max-width: 70%;
  min-width: 70%;
  box-sizing: border-box;
  height: 60px;
  color: #685bda;
  border-radius: 40px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background-color: transparent;
    border: solid 2px white;
    color: white;
    transition: 0.2s;
  }
`;

export default CustomButton;
