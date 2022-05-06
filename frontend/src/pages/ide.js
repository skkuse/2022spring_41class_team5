import React, { useState } from 'react'
import {code} from "./defaultCode"
import Editor from "@monaco-editor/react"

import "../css/main.css"
import "../css/ide.css"

export default function Ide() {
    // ide 환경 변수
    const [setting, setSetting] = useState({
        code: code.python,
        result: '코드를 작성하면 결과가 나옵니다',
        lang: 'python' 
    })

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

    // 학습내용
    const [content, setContent] = useState({
        title: "Chapter 5. 마무리",
        index: [
            "1. Python Code 익히기",
            "2. 선형대수학 공부하기",
            "3. 머신러닝 Scikit-Learn 학습",
            "4. Pytorch 학습하기",
            "5. 최종 프로젝트 하기"
        ]
    })

    const [modal, setModal] = useState(true)
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
                    <div className='content-title'>{content.title}</div>
                    <div className='content-sub'>학습 내용</div>
                    <div className='content-box'>
                        {content.index.map(item => (
                            <div className='content-text'>{item}</div>
                        ))}
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
                    <button className='submit-button' style={{
                        alignSelf: "flex-start"
                    }}>Submit Code</button>
                    <textarea className='result-box' typeof='text' id='result' value={setting.result} disabled={true}></textarea>
                </div>
            </div>
        </>
    )
}