<<<<<<< HEAD
import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

function Editor(props) {
    const {displayName,language,value, onChange}=props;
    let imgName=""

    if(displayName==="HTML"){
        imgName="248-mega.png";
    }
    if(displayName==="JS"){
        imgName="208-mega.png";
    }
    if(displayName==="CSS"){
        imgName="094-mega.png";
    }

    const [open, setOpen]=useState(true)

    function handleChange(editor,data,value){
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '':'collapsed'}`}>
            <div className="editor-title">
            <span><img src={require(`../resources/poke-icons/${imgName}`)} /></span>{displayName}
                <button 
                    type="button"
                    className="expand-collapse-btn"
                    onClick={()=>setOpen(prevOpen=>!prevOpen)}
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt:faExpandAlt}/>
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:   true,
                    lint:   true,
                    mode:   language,
                    lineNumbers:    true,
                    theme: 'material'
                }}
            />    
        </div>
    )
}

export default Editor
=======
import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

function Editor(props) {
  const { displayName, language, value, onChange } = props;
  let imgName = "";

  if (displayName === "HTML") {
    imgName = faHtml5;
  }
  if (displayName === "CSS") {
    imgName = faCss3Alt;
  }
  if (displayName === "JS") {
    imgName = faJs;
  }

  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? "expand" : "collapsed"}`}>
      <div className="editor-title">
        <span>
          <FontAwesomeIcon icon={imgName} />
        </span>
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          title={open ? "Collapse" : "Expand"}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
>>>>>>> fda7cd753b03136b5a1b3e0e9df05112c88c9bc5
