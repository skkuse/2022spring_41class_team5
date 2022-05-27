import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";
import "../css/login.css";
import axios from "axios";
import { setCookie } from "../actions/Cookie";
export default function Login() {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/signup");
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const goToList = () => {
    navigate("/list");
  };

  const handleInput = (event) => {
    return event.target.value;
  };
  const aleterror = () => {
    alert("로그인에 실패하였습니다");
  };

  const isValidLogin = !(
    email.includes("@") &&
    password.length >= 4 &&
    password.length <= 16
  );
  return (
    <>
      <div className="center-align entire">
        <div className="center-align middle">
          <div className="main-font">코헙</div>
          <div className="login-title">이메일</div>
          <input
            className="login-input"
            name="email"
            onChange={(event) => {
              setemail(handleInput(event));
            }}
          />
          <div className="login-title">비밀번호</div>
          <input
            className="login-input"
            name="password"
            type="password"
            onChange={(event) => {
              setpassword(handleInput(event));
              console.log(password);
            }}
          />
          <button
            className="center-align login-button"
            disabled={isValidLogin}
            onClick={() => {
              axios
                .put("http://127.0.0.1:5000/api/user/", {
                  //서버이름
                  email: email,
                  password: password,
                })
                .then(function (response) {
                  console.log(response);
                  if (response) {
                    <p>true</p>;
                    setCookie("email", email);
                    goToList();
                  } else {
                    <p>False</p>;
                  }
                })
                .catch(function (error) {
                  console.log(error);
                  aleterror();
                });
            }}
          >
            로그인하기
          </button>
          <div onClick={goToSignup} className="sub-text">
            비밀번호를 잊어버렸나요?
          </div>
        </div>
      </div>
    </>
  );
}
