/** @format */

// import logo from "./logo.svg";
import './App.css'
// import About from './Componenets/About'
import Navbar from './Componenets/Navbar'
import TextForm from  './Componenets/TextForm'
import React,{useState} from 'react'
  
function App() {

  const [mode, setMode] = useState('light')

  const toggleMode=()=>{
    if(mode==='light'){ 
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <div className='container'>
        <TextForm heading='Enter the text to analyze'mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  )
}

export default App
