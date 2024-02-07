import React from "react";
import styled from "styled-components";

const AnswerButton = (props: any) => {
  return (
    <StyledButton onClick={props.onClick} disabled={props.disabled} name={props.name}>
      {props.buttonText}
    </StyledButton>
  );
};



const StyledButton = styled.button`
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
}`

export default AnswerButton;
