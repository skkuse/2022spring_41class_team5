import React from "react";
import "../css/main.css"
import "../css/login.css"

export default function Signup() {
    return (
        <>
            <div className="center-align entire">
                <div className="center-align middle">
                    <div className="main-font">코헙</div>
                    <div className="login-title">이메일</div>
                    <input className="login-input" />
                    <div className="login-title">이름</div>
                    <input className="login-input" />
                    <div className="login-title">비밀번호</div>
                    <input className="login-input" />
                    <div className="center-align">
                        <button
                            onClick={() => {
                                axios
                                    .post("https://127.0.0.1:5000", {
                                        name: "name",
                                        email: "email",
                                        password: "password",
                                    })
                                    .then(function (response) {
                                        console.log(response);
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }}
                        >회원가입하기</button>
                    </div>

                </div>
            </div>
        </>
    )
}