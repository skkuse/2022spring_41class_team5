import React, { useState } from "react";
import axios from "axios";
import "../css/list.css";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../actions/Cookie";
export default function List() {
  const navigate = useNavigate();
  const goToide = () => {
    navigate("/ide");
  };
  const [content, setContent] = useState({
    title: "목차",
    index: [
      "Chapter 1. Python의 기초 자료형",
      "Chapter 2. 조건문",
      "Chapter 3. 반복문",
      "Chapter 4. 메소드",
      "Chapter 5. 클래스",
      "Chapter 6. 개 고양이 classifier",
    ],
  });
  const [name, setName] = useState("");
  const [datalist, setDatalist] = useState([]);
  //  const [data, setData] = useState({
  //        name: "",
  //       datalist:[]
  //    })
  const [modal, setModal] = useState(false);
  const onModalClick = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <>
          <div
            onClick={onModalClick}
            className="center-align entire"
            style={{
              position: "absolute",
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="modal-box">
              <div className="content-title">{name}</div>
              <div className="content-sub">학습 진행 현황</div>
              <div className="content-box">{datalist}</div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="center-align ent">
        <div className="center-align mid">
          <button
            className="entire-index-text"
            onClick={() => {
              onModalClick();
              axios
                .get("http://127.0.0.1:5000/api/submit/") //서버
                .then((response) => {
                  var array = ["", "", "", "", "", ""];
                  const _data = response.data;
                  for (var i in _data) {
                    if (_data[i]["email"] == getCookie("email")) {
                      array[i] = _data[i].num;
                    }
                  }
                  setDatalist(array);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            사용자 정보
          </button>
          <div className="modalbox">
            <div className="content-title">{content.title}</div>

            <div className="content-box">
              {content.index.map((item) => (
                <div className="content-text">{item}</div>
              ))}
            </div>
          </div>
          <div onClick={goToide} className="center-align login-button">
            실습으로 이동
          </div>
        </div>
      </div>
    </>
  );
}
