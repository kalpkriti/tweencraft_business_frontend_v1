import React from 'react';
import {Carousel, Nav, Dropdown} from 'react-bootstrap';
import Image from "./static/image.png";
import './style.css'
import {LowMod, CustMod} from './Mods';

function Home() {
  return (
    <div>
      <div className="text-center my-5">
       
        <br />
        <div className="container mx-auto">
          <h2 className="heading">Cost effective animated videos for your business.</h2>
        </div>

        <br />
        <div className="container mx-auto">
          <h3 className="lead font-weight-normal">We work with businesses to improve </h3>
          <h3 className="lead font-weight-normal">their social media marketing with animated videos.</h3>
        </div>

        <br />
        
        <button className="btn btn-primary btn-lg" style={{backgroundColor:"#FF784B", border:"none"}}>Start a Project</button>
        
        <div className="container">

          <Tabs />

        </div>
        <br />

        <center>
          <div>
            <ControlledCarousel />
          </div>
        </center>

        <br />
  
        <h2 className="heading">Use tweencraft to drive growth</h2>
        <h2 className="heading">at your business</h2>
        
      </div>
      <br />
      <br />
      <div className="container">
      
        <LowMod />
        <CustMod />
      

      </div>

      

    </div>
  );
}

export default Home;

function OldNav(){
  return (
    <div>
    <span className="lead font-weight-normal active-tab">Grocery</span>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Restaurant</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Spa & Salon</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Retail</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Home Decor</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Automotive</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Electronics</a>
    </div>
  )
}

function ControlledCarousel(){

  return (
    <Carousel id="carousel1" controls={false}>
                <Carousel.Item>
                  <img src={Image} className="d-block w-100" alt="#"/>
                          
                </Carousel.Item>
                <Carousel.Item >
                  <img src={Image} className="d-block w-100" alt="#"/>

                </Carousel.Item>
                <Carousel.Item>
                  <img src={Image} className="d-block w-100" alt="#"/>

                </Carousel.Item>
            </Carousel>
  );
}

function Tabs(){

  return(
    <div>
      <div id="tabs1">
          <br />
          <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
              Grocery
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" className="drop-item">Restaurant</Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="drop-item">Spa & Salon</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="drop-item">Retail</Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="drop-item">Home Decor</Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="drop-item">Automotive</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="drop-item">Electronics</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
      </div>
      <div id="tabs2">
      <Nav fill variant="tabs" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link href="#" className="small-tab-text">Grocery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="small-tab-text">Restaurant</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" className="small-tab-text">Spa & Salon</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" className="small-tab-text">Retail</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5" className="small-tab-text">Automotive</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-6" className="small-tab-text">Electronics</Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
          
        </div>
  );
}