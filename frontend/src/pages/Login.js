import React,  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css"
import "../css/login.css"
import axios from "axios";
import { setCookie} from '../actions/Cookie';
export default function Login() {
    const navigate = useNavigate()
    const goToSignup = () => {
        navigate("/signup")
    }
    const goToList = () => {
        navigate("/list")
    }
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  //  const [disable, setDisable] = useState(true);
  //  const [opacity, setOpacity] = useState(0.5);
 //   const onemailChange = (event) => {
 //       setemail(event.target.value);
  //  };
   // const onpasswordChange = (event) => {
  //      setpassword(event.target.value);
  //  };
    const goTolist = () => {
        navigate("/list")
    }
    const handleInput = event => {
        return event.target.value;
    };
    const aleterror=()=>{
        alert('로그인에 실패하였습니다');
    }
    /*
    const handleopacity = () => {
        email.includes('@') && password.length >= 8
          ? setOpacity(1)
          : setOpacity(0.5);
      };
    
      const handleDisable = () => {
        email.includes('@')  && password.length >= 8
          ? setDisable(false)
          : setDisable(true);
      };*/
    const isValidLogin = !(email.includes('@')  && password.length >= 8);
    return (
        <>
            <div className="center-align entire">
                <div className="center-align middle">
                    <div className="main-font">코헙</div>
                    <div className="login-title">이메일</div>
                    <input className="login-input" name="email" onChange={event => {
                    setemail(handleInput(event));
                  //  console.log(email); handleopacity();handleDisable();
                    }}  />
                    <div className="login-title">비밀번호</div>
                    <input className="login-input" name="password"  type="password" onChange={event => {
                    setpassword(handleInput(event));
                    console.log(password);//handleopacity(); console.log(disable); handleDisable();
                    }} />
                    <button  
                        className="center-align login-button"  disabled = {isValidLogin}
                      //  style = {{opacity: opacity}}
                        onClick={()=>  {
                            axios
                            .put("http://127.0.0.1:5000/api/user/", { //서버이름
                             email : email,
                             password : password,
                        })
                        .then(function(response){
                            console.log(response);
                            if ( response ) {           
                                <p>true</p>;
                                setCookie([email], [email])
                                goTolist()
                              }
                               else {
                                <p>False</p>;
                              }
                              
                        })
                        .catch(function(error){
                            console.log(error);
                            aleterror();
                        });}}
                        >로그인하기</button>
                    <div onClick={goToSignup} className="sub-text">비밀번호를 잊어버렸나요?</div>
                    <div onClick={goTolist} className="sub-text">목차로 이동</div>
                </div>
            </div>
        </>
    )
}