import React from "react";
import styled from "styled-components";

const InputField = (props: any) => {
  return (
    <StyledInput
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

const StyledInput = styled.input`
  max-width: 100%;
  min-width: 100%;
  padding: 5px 20px;
  color: white;
  height: 70px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #8077cb;
  &::placeholder {
    color: white;
    opacity: 70%;
    text-wrap: wrap;
    margin: 0;
  }
  &:focus {
    border: solid 1px white;
    outline: none;
  }
`;

export default InputField;
