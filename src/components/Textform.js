import React, {useState} from 'react';
// toast import
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Textform(props) {

    const [text , setText ] = useState('');
    const handleUpClick=()=>{
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

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }
    
    const handlePasteClick=()=> {
        navigator.clipboard.readText()
      .then((text) => {
        // Validate or format text if needed
        setText(text);
        toast.success('Pasted Successfully!');
      })
      .catch((error) => {
        console.error('Error reading clipboard text:', error);
      });
      }


    return (

        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                {/* <h1>{props.heading}</h1> */}
                <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlePasteClick}>Paste Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

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
