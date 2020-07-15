import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';
import Footer from './Footer';
import Search from './Search';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    <BootNav />
    <Routes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


function NavOld(){
  return(

  <div>
    <nav className="site-header stickly-top py-1">
      <div class="container in-line d-flex flex-column flex-md-row justify-content-between">

        <a class="navbar-brand" href="/" aria-label="Product" style={{textDecoration:"none"}}>
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

function BootNav(){
  return(
    <Navbar expand='lg'>
      <Navbar.Brand href="/">
      <svg width="189" height="45" viewBox="0 0 189 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63.1144 32.4001C64.0044 32.4001 64.7203 32.2885 65.2621 32.0652C65.8038 31.842 66.2972 31.5654 66.7422 31.2354L66.452 30.653C66.1037 30.8472 65.77 30.9927 65.4507 31.0898C65.1315 31.1869 64.7397 31.2354 64.2753 31.2354C62.9209 31.2354 62.2437 30.3619 62.2437 28.6148V19.5883H65.7264V18.4236H62.2437V14.056H61.0828L59.6317 15.803V18.4236H57.6001V19.5883H59.6317V28.6148C59.6317 29.896 59.9413 30.8472 60.5604 31.4683C61.1796 32.0895 62.0309 32.4001 63.1144 32.4001ZM74.2156 32.4001L77.8434 23.3736L81.4712 32.4001H82.0517L87.7111 18.4236H86.2599L82.487 27.8869L80.0201 21.7722C79.4783 20.4133 78.806 19.467 78.003 18.9332C77.2001 18.3994 76.2762 18.1325 75.2314 18.1325C75.0379 18.1325 74.8444 18.1422 74.6509 18.1616C74.4574 18.181 74.3123 18.1907 74.2156 18.1907V18.773C74.8541 18.8119 75.3813 19.0399 75.7973 19.4573C76.2133 19.8747 76.6535 20.5977 77.1178 21.6266L74.6509 27.8869L72.184 21.7722C71.6422 20.4133 70.9699 19.467 70.1669 18.9332C69.3639 18.3994 68.4401 18.1325 67.3952 18.1325C67.2018 18.1325 67.0083 18.1422 66.8148 18.1616C66.6213 18.181 66.4762 18.1907 66.3794 18.1907V18.773C67.0953 18.8119 67.671 19.0497 68.1063 19.4864C68.5416 19.9232 68.9818 20.6851 69.4268 21.7722L73.6351 32.4001H74.2156ZM95.1844 32.4001C96.326 32.4001 97.3224 32.1574 98.1737 31.6722C99.0251 31.1869 99.77 30.4104 100.408 29.3427L99.828 28.906C99.2863 29.6824 98.701 30.2648 98.0722 30.653C97.4433 31.0413 96.6742 31.2354 95.7649 31.2354C94.5459 31.2354 93.5882 30.721 92.8916 29.6922C92.1951 28.6633 91.8468 27.3336 91.8468 25.703H100.641L100.699 24.5383C100.699 22.4613 100.22 20.8744 99.2621 19.7776C98.3043 18.6808 96.8484 18.1325 94.8942 18.1325C93.7139 18.1325 92.6836 18.4479 91.8033 19.0788C90.9229 19.7097 90.2506 20.5686 89.7862 21.6557C89.3218 22.7427 89.0897 23.9463 89.0897 25.2663C89.0897 26.6057 89.3218 27.8141 89.7862 28.8914C90.2506 29.9688 90.9374 30.8229 91.8468 31.4538C92.7562 32.0847 93.8687 32.4001 95.1844 32.4001ZM97.9416 24.5383H91.8468C91.8468 23.5483 91.9774 22.6554 92.2386 21.8595C92.4998 21.0636 92.8626 20.4376 93.327 19.9814C93.7913 19.5252 94.3137 19.2972 94.8942 19.2972C95.9197 19.2972 96.6839 19.7436 97.187 20.6366C97.69 21.5295 97.9416 22.8301 97.9416 24.5383ZM109.072 32.4001C110.213 32.4001 111.21 32.1574 112.061 31.6722C112.912 31.1869 113.657 30.4104 114.296 29.3427L113.715 28.906C113.174 29.6824 112.588 30.2648 111.959 30.653C111.331 31.0413 110.562 31.2354 109.652 31.2354C108.433 31.2354 107.475 30.721 106.779 29.6922C106.082 28.6633 105.734 27.3336 105.734 25.703H114.528L114.586 24.5383C114.586 22.4613 114.107 20.8744 113.149 19.7776C112.192 18.6808 110.736 18.1325 108.782 18.1325C107.601 18.1325 106.571 18.4479 105.691 19.0788C104.81 19.7097 104.138 20.5686 103.674 21.6557C103.209 22.7427 102.977 23.9463 102.977 25.2663C102.977 26.6057 103.209 27.8141 103.674 28.8914C104.138 29.9688 104.825 30.8229 105.734 31.4538C106.644 32.0847 107.756 32.4001 109.072 32.4001ZM111.829 24.5383H105.734C105.734 23.5483 105.865 22.6554 106.126 21.8595C106.387 21.0636 106.75 20.4376 107.214 19.9814C107.679 19.5252 108.201 19.2972 108.782 19.2972C109.807 19.2972 110.571 19.7436 111.074 20.6366C111.577 21.5295 111.829 22.8301 111.829 24.5383ZM120.695 32.1089V20.986C121.605 19.9572 122.572 19.4427 123.598 19.4427C124.507 19.4427 125.266 19.7582 125.876 20.3891C126.485 21.02 126.79 22.0148 126.79 23.3736V32.1089H129.402V23.3736C129.402 21.4324 128.943 20.0736 128.024 19.2972C127.104 18.5207 125.919 18.1325 124.468 18.1325C123.656 18.1325 122.925 18.2732 122.277 18.5547C121.629 18.8361 121.102 19.1807 120.695 19.5883H120.55C120.376 19.2001 120.1 18.9089 119.723 18.7148C119.346 18.5207 118.799 18.4236 118.083 18.4236H115.471V19.006H116.052C116.864 19.006 117.406 19.2438 117.677 19.7194C117.948 20.195 118.083 20.9277 118.083 21.9177V32.1089H120.695ZM138.762 32.4001C139.962 32.4001 140.997 32.1623 141.867 31.6867C142.738 31.2111 143.493 30.4298 144.131 29.3427L143.551 28.906C143.009 29.7019 142.419 30.2891 141.78 30.6676C141.142 31.0461 140.329 31.2354 139.342 31.2354C137.949 31.2354 136.9 30.6822 136.193 29.5757C135.487 28.4692 135.134 27.0327 135.134 25.2663C135.134 23.4998 135.487 22.0633 136.193 20.9569C136.9 19.8504 137.949 19.2972 139.342 19.2972C140.426 19.2972 141.306 19.6029 141.983 20.2144C142.661 20.8258 143.038 21.7333 143.115 22.9369H143.696C143.696 21.6945 143.657 20.8355 143.58 20.36C143.502 19.8844 143.299 19.4816 142.97 19.1516C142.293 18.4722 140.89 18.1325 138.762 18.1325C137.369 18.1325 136.193 18.4479 135.236 19.0788C134.278 19.7097 133.562 20.5638 133.088 21.6411C132.614 22.7185 132.377 23.9269 132.377 25.2663C132.377 26.6057 132.614 27.8141 133.088 28.8914C133.562 29.9688 134.278 30.8229 135.236 31.4538C136.193 32.0847 137.369 32.4001 138.762 32.4001ZM149.747 32.1089V21.3354C150.037 20.8889 150.424 20.5347 150.908 20.2726C151.392 20.0105 151.924 19.8795 152.504 19.8795C153.027 19.8795 153.491 19.9523 153.897 20.0979C154.304 20.2435 154.613 20.4619 154.826 20.753L155.987 19.8795C155.639 19.2583 155.3 18.8216 154.971 18.5692C154.584 18.278 154.004 18.1325 153.23 18.1325C152.436 18.1325 151.745 18.2877 151.155 18.5983C150.564 18.9089 150.095 19.2874 149.747 19.7339H149.602C149.447 19.268 149.181 18.9332 148.804 18.7294C148.426 18.5255 147.87 18.4236 147.135 18.4236H144.813V19.006H145.103C145.916 19.006 146.458 19.2438 146.729 19.7194C146.999 20.195 147.135 20.9277 147.135 21.9177V32.1089H149.747ZM161.4 32.4001C162.406 32.4001 163.247 32.2448 163.925 31.9342C164.602 31.6236 165.114 31.2451 165.463 30.7986H165.608L166.624 32.1089H168.075V24.2472C168.075 21.8595 167.62 20.2435 166.711 19.3991C165.801 18.5547 164.563 18.1325 162.996 18.1325C162.048 18.1325 161.172 18.215 160.369 18.38C159.566 18.545 158.991 18.8022 158.642 19.1516C158.313 19.4816 158.11 19.8358 158.033 20.2144C157.956 20.5929 157.917 21.1122 157.917 21.7722H159.223C159.436 20.8598 159.803 20.2192 160.326 19.8504C160.848 19.4816 161.545 19.2972 162.415 19.2972C163.402 19.2972 164.157 19.6466 164.679 20.3454C165.202 21.0442 165.463 22.3448 165.463 24.2472H164.592C162.386 24.2472 160.601 24.5577 159.237 25.1789C157.873 25.8001 157.191 26.8483 157.191 28.3236C157.191 29.3136 157.419 30.1095 157.873 30.7113C158.328 31.313 158.875 31.745 159.513 32.007C160.152 32.2691 160.78 32.4001 161.4 32.4001ZM162.706 31.0898C161.932 31.0898 161.279 30.852 160.747 30.3764C160.214 29.9008 159.948 29.2166 159.948 28.3236C159.948 27.4501 160.364 26.7464 161.196 26.2126C162.028 25.6788 163.16 25.4119 164.592 25.4119H165.463V29.3427C165.114 29.8863 164.727 30.3133 164.302 30.6239C163.876 30.9345 163.344 31.0898 162.706 31.0898ZM174.997 32.1089V19.5883H179.06V18.4236H174.997V17.5501C174.997 15.0266 175.771 13.7648 177.318 13.7648C178.576 13.7648 179.495 14.2016 180.076 15.0751L180.946 14.3472C180.598 13.726 180.259 13.2892 179.931 13.0369C179.505 12.7457 178.683 12.6001 177.464 12.6001C174.078 12.6001 172.385 14.2501 172.385 17.5501V18.4236H170.353V19.5883H172.385V32.1089H174.997ZM185.372 32.4001C186.262 32.4001 186.978 32.2885 187.52 32.0652C188.062 31.842 188.555 31.5654 189 31.2354L188.71 30.653C188.362 30.8472 188.028 30.9927 187.709 31.0898C187.389 31.1869 186.998 31.2354 186.533 31.2354C185.179 31.2354 184.502 30.3619 184.502 28.6148V19.5883H187.984V18.4236H184.502V14.056H183.341L181.89 15.803V18.4236H179.858V19.5883H181.89V28.6148C181.89 29.896 182.199 30.8472 182.818 31.4683C183.437 32.0895 184.289 32.4001 185.372 32.4001Z" fill="#28272B"/>
      <path d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z" fill="#FF784B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.795 15.2607L23.9185 24.9667L35.5899 13L20.795 15.2607ZM20.1237 15.7352C19.0601 17.2315 17.3881 21.6633 14.7425 24.9667H23.1487L20.1237 15.7352ZM33.1291 17.1029L25.8387 24.2829L37.2712 17.9288L33.1291 17.1029ZM9.36249 18.1286V25.3086H13.7427L15.7512 22.808L11.6233 18.1288L9.36249 18.1286ZM8.68999 18.4705L6 20.8638H8.68999V18.4705ZM9.69874 25.9924L20.4856 32.8305L23.485 25.9924H9.69874ZM23.8983 25.6505C22.1817 29.7294 22.3876 28.704 20.795 32.8305L35.9262 29.9151L23.8983 25.6505Z" fill="white"/>
      </svg>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/sample" className="mx-4">Sample</Nav.Link>
          <Nav.Link href="/how-it-works" className="mx-4">How it Works</Nav.Link>
          <Nav.Link href="#pricing" className="mx-4">Pricing</Nav.Link>
          <Nav.Link href="#pricing" className="mx-4">About Us</Nav.Link>
          <Nav.Link href="#pricing" className="mx-4">Contact</Nav.Link>
          
        </Nav>
          <Search />
          <Nav.Link href="#home" className="text-dark">Login</Nav.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}