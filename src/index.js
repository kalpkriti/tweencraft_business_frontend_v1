import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


function Navbar(){
  return(
  <div>
    <nav className="site-header stickly-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2" href="/" aria-label="Product" style={{textDecoration:"none"}}>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 2.26069L17.9185 11.9667L29.5899 0L14.795 2.26069ZM14.1237 2.73524C13.0601 4.23154 11.3881 8.66329 8.74248 11.9667H17.1487L14.1237 2.73524ZM27.1291 4.10286L19.8387 11.2829L31.2712 4.92883L27.1291 4.10286ZM3.36249 5.12858V12.3086H7.7427L9.75123 9.80803L5.62326 5.12878L3.36249 5.12858ZM2.68999 5.47048L0 7.86382H2.68999V5.47048ZM3.69874 12.9924L14.4856 19.8305L17.485 12.9924H3.69874ZM17.8983 12.6505C16.1817 16.7294 16.3876 15.704 14.795 19.8305L29.9262 16.9151L17.8983 12.6505Z" fill="orange" />
          </svg>

          <span style={{color:"#FF784B"}}>Tweencraft</span>
        </a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="/sample">Samples</a> 
        <a className="py-2 d-none d-md-inline-block text-dark" href="/how-it-works">How it Works</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">Pricing</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">About Us</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">Contact</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">Login</a>

      </div>
    </nav>
    
  </div>
  
  );
}
