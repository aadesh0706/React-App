// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect , useState} from 'react';
// import { SpeedInsights } from "@vercel/speed-insights/react";


function App() {
  useEffect(() => {
    // toast('Free Text Utils !');
  });
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      toast('Dark mode has been enabled');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      toast('Light mode has been enabled');
    }
  }
  return (
    <>
      <ToastContainer />
      <Navbar title="Editify" about="About Us" mode={mode} toggleMode={toggleMode} />

      {/* <Navbar title="Text React App" about="About Us"/> */}
      <div className='container my-3'>
        <Textform heading='Enter the text 👇' mode={mode}/>
        {/* <SpeedInsights /> */}
        <About/>

      </div>

    </>
  );
}

export default App;
