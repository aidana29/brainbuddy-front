import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import InputField from "../components/Input";
import CustomContainer from "../components/PurpleContainer";
import CenteredContainer from "../components/CenteredContainer";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleUserInfo = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
  const isEmailValid = emailRegex.test(userInfo.email);
  const isPwValid = pwRegex.test(userInfo.password);
  const isValidCheck = isEmailValid && isPwValid;

  const handleLogin = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        if (responseData.message === "LOGIN_SUCCESS") {
          localStorage.setItem("token", responseData.token);
          localStorage.setItem("nickname", responseData.nickname);
          navigate("/main");
        } else if (responseData.message === "WRONG_PASSWORD") {
          alert("Wrong password");
        } else if (responseData.message === "NOT_REGISTERED") {
          alert("Seems like you are not registered!");
        } else {
          alert("Oops smth went wrong");
        }
      });
  };

  return (
    <CustomContainer>
      <CenteredContainer>
        <div className="inputWrap" onChange={handleUserInfo}>
          <h1 style={{ marginBottom: "50px" }}>
            Get Ready to Train Your Brain!
          </h1>
          <InputField type="email" name="email" placeholder="Email" />
          <InputField type="password" name="password" placeholder="Password" />
          <CustomButton
            buttonText="Login"
            onClick={handleLogin}
            disabled={!isValidCheck}
          />
          <a href="/signUp" className="link new">
            Don't have an account?
          </a>
        </div>
      </CenteredContainer>
    </CustomContainer>
  );
};

export default Login;
