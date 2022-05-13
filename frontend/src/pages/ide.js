import React, { useEffect, useRef, useState } from 'react'
import {code} from "./defaultCode"
import Editor from "@monaco-editor/react"
import axios from "axios";
import "../css/main.css"
import "../css/ide.css"




export default function Ide() {
    // ide 환경 변수
    const [setting, setSetting] = useState({
        code: code.python,
        lang: 'python',
        input: ''
    })
    const [result, setResult] = useState("코드를 작성하면 결과가 나옵니다")

    // language가 바뀔 때 변경
    const onLanguageChange = (e) => {
        const lang = e.target.value
        setSetting({
            code: code[lang],
            lang: lang
        })
    }

    const onCodeChange = (newCode, e) => {
        console.log(e)
        setSetting({
            ...setting,
            code: newCode,
        })
    }

    const handleEditorDidMount = (editor, monaco) => {
        console.log("onMount: the editor instance:", editor)
        console.log("onMount: the monaco instance:", monaco)
    }

    const onInputChangeHandler = (e) => {
        setSetting({
            ...setting,
            input: e.target.value
        })
    }

    const options = {
        selectOnLineNumbers: true,
        renderIndentGuides: true,
        colorDecorators: true,
        cursorBlinking: "blink",
        autoClosingQuotes: "always",
        find: {
            autoFindInSelection: "always"
        },
        snippetSuggestions: "inline"
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        alert("코드를 제출하셨습니다.")
        fetch("/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code: setting.code,
                lang: setting.lang,
                input: setting.input,
                result: result,
            })
        }).then(response => {
            console.log(response.clone().json())
            const data = response.json()
            data.then((res) => {
                console.log("res", res.result)
                setResult(res.result)
            })
        }).catch(err => {
            console.log("error", err)
        })
    }

    // 학습내용
    const [content, setContent] = useState({
        title: "전체 목차",
        index: [
            "Chapter 1. Python의 기초 자료형",
            "Chapter 2. 조건문",
            "Chapter 3. 반복문",
            "Chapter 4. 메소드",
            "Chapter 5. 클래스",
            "Chapter 6. 개 고양이 classifier"
        ]
    })


    

    //DB에서 받아와서 처리. 학습데이터
    const getEduContent = () => {
        axios.get("http://127.0.0.1:5000/api/contents/")
            .then(function (response) {
                // response  
            }).catch(function (error) {
                // 오류발생시 실행
            }).then(function () {
                // 항상 실행
            });
    }


    const [educontent, setEduContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    state = {
        arr: []
    }
    useEffect(() => {
        const fetchContents = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get(
                    'http://127.0.0.1:5000/api/contents/'
                );
                setEduContent(response.data); //get된 data
                this.setState({ arr: response.data });
                consol.log(JSON.stringify(this.state.arr));//데이터가 잘 들어갔는지 확인,,


            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchContents();
    }, []);

    /*
    if (loading) display_text = "로딩중..";
    if (error) display_text = "에러가 발생했습니다";
    if (!users) display_text = "컨텐츠가 없습니다";
    */

    const [modal, setModal] = useState(false)
    const onModalClick = () => {
        setModal(!modal)
    }

    
    var ws = useRef(null)
    const [socketConnect, setSocketConnect] = useState(false)

    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket("ws://localhost:8000")

            ws.current.onopen = () => {
                console.log("connected");
                setSocketConnect(true)
            }
            ws.current.onclose = (error) => {
                console.log("disconnect");
                console.log(error);
            };
            ws.current.onerror = (error) => {
                console.log("connection error");
                console.log(error);
            };
            ws.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                console.log(data.code);
                setSetting({
                    ...setting,
                    code: data.code,
                })
            };
        }
        // const socket = io.connect("http://localhost:8000/history")
        // socket.emit("code", {code: setting.code})
        // return () => {
        //     console.log("clean up")
        //     ws.current.close()
        // }
    }, [])

    useEffect(() => {
        if (socketConnect) {
            ws.current.send(
                JSON.stringify({
                    code: setting.code
                })
            )
        }
    }, [socketConnect, setting.code])



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
                        <div className='content-title'>{content.title}</div>
                        <div className='content-sub'>학습 내용</div>
                        <div className='content-box'>
                                {content.index.map(item => (
                                    <div className='content-text'>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </> : <></>}
            <div className='row-center-align entire'>
                <div className='row-component-size'>
                    <div className='content-title'> 챕터 제목 </div>
                    <div className='content-sub'>학습 내용</div>
                    <div className='educontent-box'>
                        <div className='content-text'>{JSON.stringify(this.state.arr)} </div>
                    </div>
                    <div onClick={onModalClick} className='entire-index-text'>전체 학습 목차 확인하기</div>
                </div>
                <div className='row-component-size'>
                    <div>
                        <div>
                            <select id='lang' onChange={(e) => onLanguageChange(e)}>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="cpp">C++</option>
                                <option value="c">C</option>
                            </select>
                            <p className='description-text'>코드를 작성해주세요</p>
                            <div typeof='text' id='code'>
                                <Editor 
                                    width="40vw"
                                    height="40vh"
                                    language={setting.lang}
                                    theme="vs-dark"
                                    value={setting.code}
                                    options={options}
                                    onChange={onCodeChange}
                                    onMount={handleEditorDidMount}
                                />
                            </div>
                        </div>
                        <div>
                            <p className='description-text'>input 값을 제공해주세요</p>
                            <textarea className='input-box' typeof='text' id="input" value={setting.input} onChange={onInputChangeHandler} />
                        </div>
                    </div>
                    <button onClick={onSubmitHandler} className='submit-button' style={{
                        alignSelf: "flex-start"
                    }}>Submit Code</button>
                    <textarea className='result-box' typeof='text' id='result' value={result} disabled={true}></textarea>
                </div>
            </div>
        </>
    )
}