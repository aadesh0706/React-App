import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
      <Navbar title="AO's Community" about="About Us"/>
      <div className='container my-3'>
        <Textform heading='Enter the text to make Uppercase'/>
      </div>

    </>
  );
}

export default App;
