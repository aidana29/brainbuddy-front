import styled from "styled-components";

export const CustomContainer = styled.div`
  line-height: 1.666;
  max-width: 70%;
  min-width: 70%;
  background-color: #685bda;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    justify-content: center;
    height: 100vh;
  }
`;

export default CustomContainer;
