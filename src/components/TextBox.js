import React, { useState } from 'react'

export default function TextBox({mode, setAlert}) {
   
   document.title = "Welcome to TextDo"

   const [text, setText] = useState("");
   
   function getTextValue(event){
      setText(event.target.value);
   }

   function clearText(){
      setText("");
   }
   function copyText(){
      navigator.clipboard.writeText(text);
      setText("");
      setAlert("show");
      setTimeout( () => setAlert("hide") , 3000);
   }
   function pasteText(){
      navigator.clipboard.readText()
      .then( text => setText(text));
   }
   function toUpperCase(){
      setText(text.toUpperCase());
   }
   function toLowerCase(){
      setText(text.toLowerCase());
   }

  return (
    <div className="container">
      <h2 className='mt-0 mb-3'>Write Text <span role="img" aria-label='down Hand Emoji'>👇</span></h2>
      <textarea className={`form-control bg-${mode} text-${ mode==='light' ? 'dark': 'light' }`} value={text} onInput={getTextValue} rows="8"></textarea>
      <div className='my-2'>
         <button className="btn btn-outline-primary m-1" onClick={clearText}>Clear</button>
         <button className="btn btn-outline-primary m-1" onClick={copyText}>Copy</button>
         <button className="btn btn-outline-primary m-1" onClick={pasteText}>Paste</button>
         <button className="btn btn-outline-primary m-1" onClick={toUpperCase}>to UpperCase</button>
         <button className="btn btn-outline-primary m-1" onClick={toLowerCase}>to LowerCase</button>
      </div>
      <hr />

      <p>Total Charactors : {text.length}</p>
      <p>Total Words : {text.length > 0 ? text.split(" ").length : 0 }</p>
    </div>
  )
}
