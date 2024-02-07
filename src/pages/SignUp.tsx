import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import CustomContainer from "../components/PurpleContainer";
import CenteredContainer from "../components/CenteredContainer";
import InputField from "../components/Input";


  const SignUp: React.FC = () => {
    const [userInfo, setUserInfo] = useState({
      email: "",
      nickname: "",
      password: "",
    });

    const navigate = useNavigate();

    const handleUserInfo = (e: React.ChangeEvent<any>) => {
      const { name, value } = e.target;
      setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSignUp = (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      fetch("http://localhost:8000/users/register", {
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
          navigate("/main")
        } else if (result.message === "ALREADY_REGISTERED") {
          alert("This email is already registered")
        } else {
          alert("Oops smth went wrong")
        }
      });

  }

  return (
    <CustomContainer>
      <CenteredContainer>
      <div className="inputWrap" onChange={handleUserInfo}>
      <h1 style={{marginBottom: "50px"}}>Signing you Up!</h1>
          <InputField type="text" name="email" placeholder="Email"/>
          <InputField type="text" name="nickname" placeholder="Nickname"/>
          <InputField type="password" name="password" placeholder="Password"/>
          <InputField type="password" name="password" placeholder="Please repeat the password"/>
      <CustomButton buttonText="Sign Up" onClick={handleSignUp}/>
      </div>
      </CenteredContainer>
    </CustomContainer>
  ); 
}

export default SignUp;
