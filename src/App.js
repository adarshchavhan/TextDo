import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import TextBox from './components/TextBox'
import About from './components/About';
import Alert from './components/Alert';

export default function App() {
   const [mode, setMode] = useState("light");

   function updateMode(){
      if(mode === "light"){
         setMode("dark");
      }else{
         setMode("light");
      }
   }
   
   const [alert, setAlert] = useState("hide");

  return (
    <>
      <div className={`bg-${mode} text-${ mode==='light' ? 'black': 'light' }`} style={{height:"100vh"}}>
         <Router>
            <Header title="TextDo" updateMode={updateMode} mode={mode}/>
            <Alert alert={alert} />
            <Routes>
                  <Route path="/about" element={<About mode={mode} />}/>
                  <Route index path="/" element={<TextBox mode={mode} setAlert={setAlert} />} />
            </Routes>
         </Router>
      </div>

    </>
  )
}
