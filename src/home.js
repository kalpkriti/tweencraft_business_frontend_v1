import React from 'react';
import {Carousel, Nav, Dropdown, Image, Button, Modal} from 'react-bootstrap';
import Img from "./static/image.png";
import './style.css'
import {LowMod, CustMod} from './mods';
import { useState } from 'react';
import {Headings} from './pricing';
import Cards from './price_card';
import HowItWorks from './how_it_works';
import {BootNavWhite} from './index';

var arr = [
  'Insurance',
  'Jewellery',
 'Miscellaneous',
  'Covid Safety',
  'Education']


function Home() {
  return (
    <div>
      <div className="text-center py-2" id="bgimg">
        <BootNavWhite />
       
        <div className="container mx-auto py-5">
          <h2 className="heading" id="white">Cost effective animated videos for your business.</h2>
        </div>

        <br />
        <div className="container mx-auto">
          <h3 className="lead font-weight-normal" id="white">We work with businesses to improve </h3>
          <h3 className="lead font-weight-normal" id="white">their social media marketing with animated videos.</h3>
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

        
      </div>

      <div className="text-center small-text" >
          Features
        </div>
        <br />
        <h2 className="heading" >Use tweencraft to drive growth</h2>
        <h2 className="heading" >at your business</h2>
        
      <br />
      <div className="text-center my-4 py-4">    
      <CustMod />
      </div>
      <br />

      <Headings />
      <br />
      <Cards />
      <br />
      <HowItWorks />
    </div>
    
  );
}

export default Home;


function ControlledCarousel(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Carousel id="carousel1" controls={false} indicators={false}>
                <Carousel.Item >
                  
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                          
                </Carousel.Item>
                <Carousel.Item >
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>

                </Carousel.Item>
                <Carousel.Item>

                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>
                    <Image src = {Img} onClick={handleShow} style={{height:"25%", width:"20%", margin: "5px 5px"}}></Image>

                </Carousel.Item>
            </Carousel>

            <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body>

              <video width="100%" height="100%" controls autoPlay>
                <source src="https://tweencraftcrm.s3.ap-south-1.amazonaws.com/samples/1594873289381_teacher_Project28_2020_06_30_1.mp4" type="video/mp4" />
                
                Your browser does not support the video tag.

              </video>

            </Modal.Body>
            </Modal>

            </div>
  );
}

function Tabs(){

  const listItems = arr.map((name) =>
        <Nav.Item>
          <Nav.Link href={"/category/"+ name} className="small-tab-text">{name}</Nav.Link>
        </Nav.Item>
        );

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
            {listItems}
          </Nav>
          </div>
          
        </div>
  );
}
