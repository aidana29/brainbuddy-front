import React from "react";
import styled from "styled-components";

const AnswerButton = (props: any) => {
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      name={props.name}
    >
      {props.buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  box-sizing: border-box;
  min-height: 60px;
  color: #685bda;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  padding: 0 30px;
  &:hover {
    background-color: #685ada;
    border: solid 2px white;
    color: white;
    transition: 0.2s;
  }
`;

export default AnswerButton;
