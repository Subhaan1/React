import React,{useState}from 'react'


export default function Textform() {
    const msgalert=(event)=>{

updatemsg(event.target.value);
    }
    const msgalert1=()=>{
        updatemsg(msgbox.toUpperCase());
    }

    
    
    const [msgbox,updatemsg]=useState();
  return (
    <>
    <div className="container form-floating">
  <textarea className="form-control" value={msgbox} onChange={msgalert} id="floatingTextarea"></textarea>
  <button onClick={msgalert1}>Click Me</button>
    
  
</div>
    
    </>
  )
}
