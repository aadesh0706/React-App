import React, {useState} from 'react';
// toast import
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {useEffect} from 'react';



export default function Textform(props) {
    const [text , setText ] = useState('');
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let nextText=text.toUpperCase();
        setText(nextText);
    };
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let nextText=text.toLowerCase();
        setText(nextText);
    };    
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let nextText='';
        setText(nextText);
    };
    const handleCopyClick=()=>{
        try {
            navigator.clipboard.writeText(text);
            console.log('Copied to clipboard!');
            toast.success('Copied to clipboard!');
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
    };
    
    // paste logic
    const handlePasteClick=()=>{
        // write logic for paste copied text
    }



    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                {/* <h1>{props.heading}</h1> */}
                <textarea className='form-control' value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>        
            <button className='btn btn-primary mx-2' onClick={handlePasteClick}>Paste Text</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3'>
            <p></p>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length -1} Words, {text.length} Characters</p>
            <p>You need {0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
