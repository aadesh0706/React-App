import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
export default function Navbar(props) {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
  };

  
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href="#">{props.title}</a>
        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
          <div className='navbar-nav'>
            <a className='nav-item nav-link active' href="#">Home <span className="sr-only">(current)</span></a>
            <a className='nav-item nav-link' href="#">{props.about}</a>
          </div>
        </div>
        <div class="ml-auto">
          <button type="button" onClick={toggleMode} className="btn btn-primary ml-auto">Dark Mode</button>
        </div>
      </nav>

    </div>
  );
}

Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}