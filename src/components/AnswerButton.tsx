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
  min-height: 50px;
  color: #685bda;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px;
  padding: 0 30px;
  &:hover {
    background-color: #685ada;
    border: solid 2px white;
    color: white;
    transition: 0.2s;
  }
  @media (max-width: 700px) {
    margin: 5px 0px;
  }
`;

export default AnswerButton;
