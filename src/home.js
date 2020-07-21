import React from 'react';
import {Carousel, Nav, Dropdown, Image, Button, Modal} from 'react-bootstrap';
import Img from "./static/image.png";
import './style.css'
import {Feature1, CustMod, Feature2, Feature3} from './mods';
import { useState } from 'react';
import {Headings} from './pricing';
import Cards from './price_card';
import HowItWorks from './how_it_works';
import {BootNavWhite} from './index';

var arr = [
  ['Insurance', 'Insurance'],
  ['Jewellery', 'Jewellery'],
 ['Miscellaneous', 'Miscellaneous'],
  ['Covid_Safety','Covid Safety'],
  ['Education', 'Education'],
['Ayurveda', 'Ayurveda']]


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
        
        <a className="btn btn-primary btn-lg" href="/startproject" style={{backgroundColor:"#FF784B", border:"none"}}>Start a Project</a>
        
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
        <h2 className="heading" >Use kalpkriti to drive growth</h2>
        <h2 className="heading" >at your business</h2>
        
      <br />
      <div className="container">

        <Feature1 />  
        <br />
        <br />
        <Feature2 />
        <br />
        <br />
        <Feature3 />
      </div>
       

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
          <Nav.Link href={"/category/"+ name[0]} className="small-tab-text">{name[1]}</Nav.Link>
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
              <Dropdown.Item href="/category/Insurance" className="drop-item">Insurance</Dropdown.Item>
              <Dropdown.Item href="/category/Jewellery" className="drop-item">Jewellery</Dropdown.Item>
              <Dropdown.Item href="/category/Education" className="drop-item">Education</Dropdown.Item>
              <Dropdown.Item href="/category/Covid_Safety" className="drop-item">Covid Safety</Dropdown.Item>
              <Dropdown.Item href="/category/Miscellaneous" className="drop-item">Miscellaneous</Dropdown.Item>
              <Dropdown.Item href="/category/Digital_Marketing" className="drop-item">Digital Marketing</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
      </div>
      <div id="tabs2">
      <Nav fill variant="tabs" defaultActiveKey="#">
            {listItems}
            <Nav.Item>
          <Nav.Link href="/sample" className="small-tab-text">View all</Nav.Link>
        </Nav.Item>
          </Nav>
          </div>
          
        </div>
  );
}
