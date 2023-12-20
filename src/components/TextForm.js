import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text , setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Success', ' : Converted to UpperCase!');
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Success', ' : Converted to LowerCase!');
    }
    const handleClearText = () => {
        let newText = ("");
        setText(newText);
        props.showAlert('Success', ' : Text cleared!');
    }
    const handleCopyText = () => {
        let copy = document.getElementById("myTextBox");
        copy.select();
        copy.setSelectionRange(0,9999);
        navigator.clipboard.writeText(copy.value);
        props.showAlert('Success', ' : Copied to clipboard!');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Success', ' : Extra spaces removed!');
    }
    return (
    <div>
      <>
        <div className="container mb-3">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
        <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} id="myTextBox" value={text} onChange={handleOnChange} rows="9"></textarea>
        <button type='button' className='btn btn-primary mt-2 me-2' onClick={handleUpperCase}>Convert to UpperCase</button>
        <button type='button' className='btn btn-primary mt-2 me-2' onClick={handleLowerCase}>Convert to LowerCase</button>
        <button type='button' className='btn btn-primary mt-2 me-2' onClick={handleClearText}>Clear Text</button>
        <button type='button' className='btn btn-primary mt-2 me-2' onClick={handleCopyText}>Copy Text</button>
        <button type='button' className='btn btn-primary mt-2 ' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <h1 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h1>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(" ").length} Words and {text.length} Characters</p>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").length} Minutes read</p>
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h1>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length>0? text : "Enter something in the above textbox to preview it here"}</p>
        </div>
        
      </>
    </div>
  )
}

TextForm.protoTypes = {
    heading : PropTypes.string.isRequired,
}