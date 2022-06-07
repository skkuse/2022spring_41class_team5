import React, { useState } from "react";
import "../css/main.css";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const onemailChange = (event) => {
    setemail(event.target.value);
  };
  const onnameChange = (event) => {
    setname(event.target.value);
  };
  const onpasswordChange = (event) => {
    setpassword(event.target.value);
  };
  const handleInput = (event) => {
    return event.target.value;
  };
  const isValidLogin = !(
    email.includes("@") &&
    password.length >= 4 &&
    password.length <= 16
  );
  const aleterror = () => {
    alert("회원가입에 실패하였습니다");
  };
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
          <div className="login-title">이름</div>
          <input className="login-input" name="name" onChange={onnameChange} />
          <div className="login-title">비밀번호</div>
          <input
            className="login-input"
            name="password"
            type="password"
            onChange={(event) => {
              setpassword(handleInput(event));
            }}
          />
          <div className="center-align">
            <button
              className="center-align login-button"
              disabled={isValidLogin}
              onClick={() => {
                axios
                  .post("http://127.0.0.1:5000/api/user/", {
                    //서버이름
                    name: name,
                    email: email,
                    password: password,
                  })
                  .then(function (response) {
                    console.log(response);
                    if (response) {
                      <p>true</p>;
                      goToLogin();
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
              회원가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
