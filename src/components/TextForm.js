import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase(text);
        setText(newText) ;
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase(text);
        setText(newText) ;
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = ()=> {
        let newText = '';
        setText(newText) ;
        props.showAlert("Text cleared!", "success");
    }
    const handleOnChange = (event)=> {
        setText(event.target.value) ;
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!", "success");
    }
    const [text, setText] = useState('') ;

    return (

        <>
        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleUpClick}>convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLoClick}>convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>

        </>
    )
}