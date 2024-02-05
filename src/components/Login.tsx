import React, { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

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
          alert("SUCCESS");
        } else {
          console.log("final error");
        }
      });
  };

  return (
    <div className="container">
      <h1>Welcome to BrainBuddy!</h1>
      <div className="login-container" onChange={handleUserInfo}>
        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input type="text" name="email" className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input type="password" name="password" className="input-field" />
          <a href="#" className="link password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-button" onClick={handleLogin}>
          Login
        </button>
        <a href="#" className="link new">
          Don't have an account?
        </a>
      </div>
    </div>
  );
};
export default Login;
