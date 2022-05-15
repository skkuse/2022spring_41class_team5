import React, { useState } from 'react'
import axios from "axios";
import "../css/list.css"
import { useNavigate } from "react-router-dom"
import { setCookie, getCookie } from '../actions/Cookie';
export default function List() {
    const navigate = useNavigate()
    const goToide = () => {
        navigate("/ide")
    }
    const [content, setContent] = useState({
        title: "목차",
        index: [
            "1. Python Code 익히기",
            "2. 선형대수학 공부하기",
            "3. 머신러닝 Scikit-Learn 학습",
            "4. Pytorch 학습하기",
            "5. 최종 프로젝트 하기" 
        ]
    })
    
 //   const [data, setData] = useState({
 //       name: " ",
 //       datalist:[]
//    })
    const [modal, setModal] = useState(false)
    const onModalClick = () => {
        setModal(!modal)
    }

    return (
        <>
           {modal ? 
            <>
                <div onClick={onModalClick} className='center-align entire' style={{
                    position: "absolute",
                    zIndex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }}>
                    <div className='modal-box'>
                        <div className='content-title'>{data.name}</div>
                        <div className='content-sub'>학습 진행 현황</div>
                        <div className='content-box'>
                            {data.datalist.map(item => (
                                <div className='content-text'>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </> : <></>}
            <div className="center-align ent">
                
                <div className="center-align mid">
                    
                    <button className='entire-index-text'
                        onClick={() => {
                        onModalClick()
                        axios
                            .post("https://127.0.0.1:5000/", { //서버이름
                            
                             email : getCookie([email]),
                          })
                         .then(function(response){
                            console.log(response);                    
                        })
                        .get("http://127.0.0.1:5000/")  //서버
                            .then((response) => {
                                console.log("DB connected");
                                const data_ = response.data;
                                for(var i in data_){
                                    console.log(data_[i].email);
                                    console.log(data_[i].problem_id_text);
                                }
                        })
                        .catch(function (error) {
                        console.log(error);
                    });
                }}
                >사용자 정보</button>
                    <div className='modalbox'>
                        
                        <div className='content-title'>{content.title}</div>
                        
                        <div className='content-box'>   
                            {content.index.map(item => (
                                <div className='content-text'>{item}</div>
                            ))}
                        </div>
                    </div>
                    <div onClick={goToide} className="center-align login-button">실습으로 이동</div>
                    
                </div>
                </div>
        </>
    )
}

