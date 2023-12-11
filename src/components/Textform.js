import React, {useState} from 'react';


export default function Textform(props) {
    const [text , setText ] = useState('Enter Text Here 2');
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let nextText=text.toUpperCase();
        setText(nextText);
    };
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    };
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                {/* <h1>{props.heading}</h1> */}
                <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
        </div>
    );
}
