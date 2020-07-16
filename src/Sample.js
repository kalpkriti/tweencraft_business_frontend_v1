import React from 'react';
import {Dropdown, Image, Nav, Button, Form, FormControl} from 'react-bootstrap';
import './style.css';
import Tweenpic from "./static/image.png";
import ad from "./static/ad.png";
import { CustMod } from './Mods';
import Ad from './Ad';
import axios from 'axios';

var arr = ['General Shop',
  'Insurance',
  'Jewellery',
 'Miscellaneous',
  'Covid Safety',
  'Digital Marketing']


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
                
                <br />
                <div className="container">
                    <TabPills />

                </div>
                <br />
                <div>
                    <video width="60%" height="60%" autoPlay loop controls id="video">
                    
                    <source src="https://tweencraftcrm.s3.ap-south-1.amazonaws.com/samples/1594873289381_teacher_Project28_2020_06_30_1.mp4" type="video/mp4" id="source" />
                    
                    Your browser does not support the video tag.

                    </video>
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

                <Ad />

            </center>
        </div>
    );
}

function TabPills(){

    const fetch = (selectedKey) => {
       

        axios.post('http://52.66.132.209:5000/getSampleVideos', {
            "language": "",
            "category": selectedKey
        }).then((response)=>{
            console.log(selectedKey);
            var video = document.getElementById('video');
            var source = document.getElementById('source');
            source.setAttribute('src', response.data.data.videos[0].url);
            
            video.load()
            
        }).catch((err) => {
            console.log(err);
    
        })
    }
    return(

    <Nav fill variant="pills" defaultActiveKey="#" onSelect={fetch}>
        <Nav.Item>
            <Nav.Link eventKey="Digital_Marketing" className="small-tab-text">Digital Marketing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="Education" className="small-tab-text">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="Insurance" className="small-tab-text">Insurance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="General_Shop" className="small-tab-text">General Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="Jewellery" className="small-tab-text">Jewellery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="Miscellaneous" className="small-tab-text">Miscellaneous</Nav.Link>
        </Nav.Item>
    </Nav>
  )
}

