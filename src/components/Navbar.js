import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
export default function Navbar(props) {

  // const [isDarkMode, setDarkMode] = useState(false);


  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5588927612636319"
     crossorigin="anonymous"></script>
     <a className='navbar-brand' href="https://editify.vercel.app/">{props.title}</a>
        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
          <div className='navbar-nav'>
            <a className='nav-item nav-link active' href="/">Home <span className="sr-only">(current)</span></a>
            <a className='nav-item nav-link' href="/">{props.about}</a>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        {/* <input className="form-check-input"  type="checkbox" id="flexSwitchCheckDefault"/> */}
                        <button className="btn btn-primary mx-1 my-1 form-check-label" onClick={props.toggleMode} id="flexSwitchCheckDefault">Enable DarkMode</button>
                    </div>
      </nav>
    
  );
}

Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}
