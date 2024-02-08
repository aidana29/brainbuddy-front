import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import CustomContainer from "../components/PurpleContainer";
import CenteredContainer from "../components/CenteredContainer";
import InputField from "../components/Input";
import EC2 from "../config";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const handleUserInfo = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //Email has to include @ and a dot
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  //Minimum 3 characters, at least one letter and one number:
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
  const isEmailValid = emailRegex.test(userInfo.email);
  const isPwValid = pwRegex.test(userInfo.password);
  const isPwChkValid = userInfo.password === userInfo.passwordCheck;
  const isNicknameValid = userInfo.nickname.length > 1;
  const isValidCheck =
    isEmailValid && isPwValid && isPwChkValid && isNicknameValid;

  const handleSignUp = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    fetch(`${EC2}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfo.email,
        nickname: userInfo.nickname,
        password: userInfo.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.message === "SIGNUP_SUCCESS") {
          navigate("/login");
        } else if (result.message === "ALREADY_REGISTERED") {
          alert("This email is already registered");
        } else {
          alert("Oops smth went wrong");
        }
      });
  };

  return (
    <CustomContainer>
      <CenteredContainer>
        <div className="inputWrap" onChange={handleUserInfo}>
          <h1 style={{ marginBottom: "50px" }}>Signing you Up!</h1>
          <label className="signup">Email</label>
          <InputField
            type="text"
            name="email"
            placeholder="Email@example.com"
          />
          <label className="signup">Nickname</label>
          <InputField
            type="text"
            name="nickname"
            placeholder="Minimum 3 characters"
          />
          <label className="signup">Password</label>
          <InputField
            type="password"
            name="password"
            placeholder="Minimum 3 characters, at least one letter and one number"
          />
          <InputField
            type="password"
            name="passwordCheck"
            placeholder="Please repeat the password"
          />
          <CustomButton
            buttonText="Sign Up"
            onClick={handleSignUp}
            disabled={!isValidCheck}
          />
        </div>
      </CenteredContainer>
    </CustomContainer>
  );
};

export default SignUp;
