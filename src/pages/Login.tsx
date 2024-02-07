import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import InputField from "../components/Input";
import CustomContainer from "../components/PurpleContainer";
import CenteredContainer from "../components/CenteredContainer";

const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleUserInfo = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

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
      .then((result) => {
        if (result.message === "LOGIN_SUCCESS") {
          localStorage.setItem("token", result.token);
          navigate("/")
        } else if (result.message === "WRONG_PASSWORD") {
          alert("Wrong password")
        } else if (result.message === "NOT_REGISTERED") {
          alert("Seems like you are not registered!")
        } else {
          alert("Oops smth went wrong")
        }
      });
  };

  return (
    <CustomContainer>
      <CenteredContainer>
      <div className="inputWrap" onChange={handleUserInfo}>
      <h1 style={{marginBottom: "50px"}}>Get Ready to Train Your Brain!</h1>
          <InputField type="email" name="email" placeholder="Email"/>
          <InputField type="password" name="password" placeholder="Password"/>
          {/* <a href="#" className="link password">
            Forgot Password?
          </a> */}
        <CustomButton buttonText="Login" onClick={handleLogin}/>
        <a href="/signUp" className="link new">
          Don't have an account?
        </a>
      </div>
      </CenteredContainer>
      </CustomContainer>
  );
};

export default Login;
