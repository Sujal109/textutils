import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled
  const [alert, setAlert] = useState(null) ;

  const showAlert = (message, type) => {
    setAlert({
      msg : message ,
      type : type 
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>

    <Router>

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

    <Alert alert={alert} />

    <div className="container">

    <Routes>
          <Route exact path="/About" element= {<About />}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} >
          </Route>
    </Routes>


      
    </div>


  {/* <About/>
     */}

</Router>
    </>
  );
}

export default App;
