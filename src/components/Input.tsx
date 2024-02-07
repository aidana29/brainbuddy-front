import React from "react";
import styled from "styled-components";

const InputField = (props: any) => {
    return (
        <StyledInput type={props.type} name={props.name} placeholder={props.placeholder}/>
    )
}

const StyledInput = styled.input `
width: 100%;
padding: 5px 20px;
height: 70px;
color: white;
border: none;
border-radius: 10px;
margin-bottom: 10px;
box-sizing: border-box;
font-size: 16px;
background-color: #8077cb;
&::placeholder {
    color: white;
}
&:focus {
    border: solid 1px white;
    outline: none;
}
`

export default InputField
