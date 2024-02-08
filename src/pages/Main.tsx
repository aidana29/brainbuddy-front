import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AnswerButton from "../components/AnswerButton";
// import CustomButton from "../components/Button";
import CustomContainer from "../components/PurpleContainer";
import Fab from "@mui/material/Fab";
import LogoutIcon from "@mui/icons-material/Logout";

// import CenteredContainer from "../components/CenteredContainer";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const token: string = localStorage.getItem("token")! 

  interface IQuestion {
    id: string;
    theme: string;
    question: string;
    answer: string;
    option1: string;
    option2: string;
    option3: string;
    background: string;
  }

  const nickname = localStorage.getItem("nickname");
  const [questionData, setQuestionData] = useState<IQuestion>({
    id: "",
    theme: "",
    question: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    background: "",
  });

  const getQuestion = () => {
    // e.preventDefault();
    setAnswered(false);
    fetch("http://localhost:8000/main/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: token,
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        if (responseData.message === "QUESTION_SENT") {
          setQuestionData(responseData.data);
          console.log(responseData.data)
        } else {
          alert("Oops smth went wrong");
        }
      });
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const { id, theme, question, answer, option1, option2, option3, background } =
    questionData;

  const [answered, setAnswered] = useState(false);
  const [answeredRight, setAnsweredRight] = useState(false);

  function handleClick(e: React.ChangeEvent<any>) {
    const answer = e.target.name;
    setAnswered(true);
    answer === "right" && handleRightAnswer();
    fetch("http://localhost:8000/main/answered", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: token,
      },
      body: JSON.stringify({
        questionId: id,
        answer: answer,
      }),
    }).then((response) => {
      return response.json();
    })
  }

  function handleRightAnswer() {
    setAnsweredRight(true);
  }

  function handleLogOut() {
    localStorage.clear();
    alert("You are being signed out");
    navigate("/");
  }

  return (
    <CustomContainer>
      <ProfileContainer>
        <ProfileWrap>
          <img className="avatar" src={"/images/avatar.png"} alt="" />
          <h1 style={{ margin: "0", paddingLeft: "20px" }}>
            Hello, {nickname}
          </h1>
        </ProfileWrap>
        <Fab
          sx={{ color: "white", backgroundColor: "#F7B36A" }}
          onClick={handleLogOut}
        >
          <LogoutIcon />
        </Fab>
      </ProfileContainer>
      <QuestionWrap style={{ display: answered ? "none" : "flex" }}>
        <p className="theme">{theme}</p>
        <p className="question">{question}</p>
        <ButtonWrap>
          <AnswerButton
            buttonText={answer}
            name="right"
            onClick={handleClick}
          />
          <AnswerButton
            buttonText={option1}
            name="wrong"
            onClick={handleClick}
          />
          <AnswerButton
            buttonText={option2}
            name="wrong"
            onClick={handleClick}
          />
          <AnswerButton
            buttonText={option3}
            name="wrong"
            onClick={handleClick}
          />
          {/* <h1> {background}</h1> */}
        </ButtonWrap>
      </QuestionWrap>
      <AnswerWrap style={{ display: answered ? "flex" : "none" }}>
        <h2 style={{ display: answeredRight ? "block" : "none" }}>
          Yes, that's right! 👏
        </h2>
        <h2 style={{ display: answeredRight ? "none" : "block" }}>
          Wrong answer 😭
        </h2>
        <p className="question">{background}</p>
        <AnswerButton
          disabled={false}
          onClick={getQuestion}
          buttonText="Next Question"
        />
      </AnswerWrap>
    </CustomContainer>
  );
};

const ProfileContainer = styled.div`
  height: 100px;
  max-width: 80%;
  min-width: 80%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
`;

const QuestionWrap = styled.div`
  border-radius: 50px;
  height: 400px;
  background-color: white;
  max-width: 80%;
  min-width: 80%;
  padding: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const AnswerWrap = styled.div`
  border-radius: 50px;
  height: 400px;
  background-color: white;
  max-width: 80%;
  min-width: 80%;
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Main;
