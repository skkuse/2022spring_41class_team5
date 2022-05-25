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
        fetch("http://127.0.0.1:8000/api/submit", {
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
        axios.get("http://127.0.0.1:5000/api/content/")
            .then(function (response) {
                // response  

            }).catch(function (error) {
                // 오류발생시 실행

            }).then(function () {
                // 항상 실행


            });
    }


    const [eduContent, setEduContent] = useState([]);


    useEffect(() => {
        async function fetchContent() {
            try {
                const response = await axios.get("http://127.0.0.1:5000/api/content/")
                const jsondata = await response.data;

                setEduContent([jsondata[0].content_content, jsondata[1].content_content, jsondata[2].content_content, jsondata[3].content_content, jsondata[4].content_content, jsondata[5].content_content] );

                /*
                for (var i in jsondata) {
                    //console.log(jsondata[i].content_id);
                    //console.log(jsondata[i].content_content);

                    console.log("들어가야 하는 내용: " + jsondata[i].content_content);
                    setEduContent([ ... eduContent, jsondata[i].content_content]);

                    console.log("실제로 들어간 내용: " + eduContent);
                }

                 * */

                // response  
                console.log("DB connected");
            } catch (error) {
                // 오류발생시 실행
                for (var idx in content.index) {
                    setEduContent(eduContent.concat(content.index[idx]));
                    console.log(eduContent);
                }

                console.log("DB connect failed");
            }
        }
        fetchContent();
        

    }, []);



    const [chapter, setChapter] = useState(0);
    const onNextClick = () => {
        if (chapter < 5) {
            const num = chapter + 1;
            setChapter(num);
            console.log(chapter);
        }
        else {
            setChapter(5);
            console.log(chapter+" End of the contents");
        }

        
    }
    const onBeforeClick = () => {
        if (chapter > 0) {
            const num = chapter - 1;
            setChapter(num);
            console.log(chapter);
        }
        else {
            setChapter(0);
            console.log(chapter + " Start of the contents");
        }


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

    const [modal, setModal] = useState(false)
    const onModalClick = () => {
        setModal(!modal)
    }

    const [modal2, setModal2] = useState(false)
    const onModal2Click = () => {
        setModal2(!modal2)
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



            



            {modal2 ?
                <>
                    <div onClick={onModal2Click} className='center-align entire' style={{
                        position: "absolute",
                        zIndex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }}>
                        <div className='modal-box'>
                            <div className='content-title'>사용자이름</div>
                            <div className='content-sub'>학습 진행 현황</div>
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
                    <div className='content-title'>{content.index[chapter]} </div>
                    <div className='content-sub'>학습 내용</div>

                    <div className='row-center-align'>
                        <div onClick={onBeforeClick} className='chapter-button' style={{
                        flex : 1
                        }}> 이전 </div>
                            <div onClick={onNextClick} className='chapter-button' style={{
                                flex: 1
                            }}> 다음 </div>
                    </div>

                    <div className='educontent-box'>
                        <div className='content-text' > {eduContent[chapter]} </div>
                    </div>
                    <div onClick={onModalClick} className='entire-index-text'>전체 학습 목차 확인하기</div>
                    
                </div>
                <div className='row-component-size'>
                    <div onClick={onModal2Click} className='content-sub'>사용자기록</div>

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