import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function Navbar(){
  return(
  <div>
    <nav className="site-header stickly-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2" href="#" aria-label="Product" style={{textDecoration:"none"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#FF784B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Tweencraft</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
          <span style={{color:"#FF784B"}}>Tweencraft</span>
        </a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">Samples</a> 
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">How it Works</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">Pricing</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">About Us</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">Contact</a>
        <a className="py-2 d-none d-md-inline-block text-dark" href="#">Login</a>

      </div>
    </nav>
    
  </div>
  );
}
