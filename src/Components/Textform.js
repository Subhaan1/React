import React,{useState} from 'react'


export default function Textform() {
    const msgalert=(event)=>{

      setText(event.target.value);
    }
    const uppercase=()=>{
      setText(text.toUpperCase());
    }
    const lowerCase=()=>{
      setText(text.toLowerCase());
  }
    const clearCase=()=>{
      let newText='';
      setText(newText)
  }
  
const copy=()=>{
  var text=document.getElementById("floatingTextarea");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const clearSpaces=()=>{
  var newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}

    
    
    const [text,setText]=useState();
  return (
    <>
    <div className="container my-3 mb-3">
  <textarea className="form-control" value={text} onChange={msgalert} id="floatingTextarea" rows="8"></textarea>
  <button className="btn btn-primary mx-2 my-2" onClick={uppercase}>Covert to Upercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={lowerCase}>Covert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={clearCase}>Covert to clear</button>
  <button className="btn btn-primary mx-2 my-2" onClick={copy}>Click to Copy</button>
  <button className="btn btn-primary mx-2 my-2" onClick={clearSpaces}>Click to Clear Spaces</button>
</div>
<div className='container my-3'>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length}</p>
  <p>{0.008*text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>

</div>
    
    </>
  )
}
