import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type , message) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [switchText, setSwitchText] = useState('Enable Dark Mode')
  const [mode, setMode] = useState('light');
  const changeMode = () => {
    if(mode==='light'){
      setMode("dark");
      setSwitchText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert('Success', ' : Dark Mode enabled')
    }
    else{
      setMode('light');
      setSwitchText('Enable Dark Mode');
      document.body.style.backgroundColor = '#f0f0f0';
      showAlert('Success', ' : Light Mode enabled')
    }
  }
  return (
    <div>
      <>
      <BrowserRouter>
      <Navbar mode={mode} changeMode={changeMode} switchText={switchText}/>
      <Alert alert={alert}/>
      <div className="container px-5  my-3">
        <Routes>
          <Route index element={<TextForm  heading="Enter text here to analyze" showAlert={showAlert} mode={mode}/>} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes> 
      </div>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
