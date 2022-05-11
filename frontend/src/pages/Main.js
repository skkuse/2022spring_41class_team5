import React from "react"
import { useNavigate } from "react-router-dom"
import "../css/main.css"

export default function Main() {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/login")
    }

    const goToSignup = () => {
        navigate("/signup")
    }
    return (
        <>
            <div className="center-align entire">
                <div className="center-align middle">
                    <div className="main-font">코헙</div>
                    <div className="sub-title-font">코딩 교육계의 프로그래머스</div>
                    <div className="code-hub-font">"Code Hub"</div>
                    <div onClick={goToLogin} className="center-align login-button">로그인 하기</div>
                    <div onClick={goToSignup} className="center-align login-button">회원가입 하기</div>
                </div>
            </div>
        </>
    )
} 