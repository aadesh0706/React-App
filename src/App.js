// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react'


function App() {
  useEffect(() => {
    toast('Free Text Utils !');
  });
  return (
    <>
      <ToastContainer />
      <Navbar title="Editify" about="About Us"/>
      <div className='container my-3'>
        <Textform heading='Enter the text 👇'/>
        <About/>
      </div>

    </>
  );
}

export default App;
