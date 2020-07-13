import React from 'react';
import {Dropdown, Image, Nav, Button} from 'react-bootstrap';
import './style.css';
import Tweenpic from "./static/image.png";
import ad from "./static/ad.png";
import { CustMod } from './Mods';

export default function Sample(){
    return(
        <div>
            <br />
            <br />
                <div className="text-center small-text">
                    Sample
                </div>
            <br />
            <center>

                <span className="heading">
                    Animated Videos for 
                </span>
                <br />
                <span className="heading">
                    every type of business
                </span>

                <br />
                <br />

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Select Video Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" className="drop-item">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className="drop-item">Hindi</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="drop-item">Marathi</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <div className="container">
                    <TabPills />

                </div>
                <br />
                <div>
                    <Image src = {Tweenpic} style={{height:"60%", width:"60%", margin: "10px 10px"}}></Image>
                </div>

                <div className="my-5">
                    <Image src = {Tweenpic} style={{height:"15%", width:"15%", margin: "10px 10px"}}></Image>
                    <Image src = {Tweenpic} style={{height:"15%", width:"15%", margin: "10px 10px"}}></Image>
                    <Image src = {Tweenpic} style={{height:"15%", width:"15%", margin: "10px 10px"}}></Image>
                    <Image src = {Tweenpic} style={{height:"15%", width:"15%", margin: "10px 10px"}}></Image>
                </div>

                <br />
                
                <CustMod />

                <br />

                <div className="jumbotron container">
                    <div className="row text-left">
                        <div className="col-sm-8">
                            
                            <span className="mx-5 px-1 small-orange-text">
                                Want to discuss with us.
                            </span>
                            
                        </div>
                        <div className="col-sm">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 px-5">
                            <span className="heading">
                            Tell us what you need, We'll tell you the best way for an animated video.
                            </span>
                        </div>
                        <div className="col-sm my-2">
                            <button className="btn btn-primary btn-lg" style={{backgroundColor:"#FF784B", border:"none"}}>
                                Schedule a Call
                            </button>

                            <br/>
                            <div className="my-2">
                            <span >
                                Already a member ? Log In
                            </span>
                            </div>
                        </div>
                    </div>
                </div>

            </center>
        </div>
    );
}

function TabPills(){
    return(

    <Nav fill variant="pills" defaultActiveKey="#">
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
  )
}