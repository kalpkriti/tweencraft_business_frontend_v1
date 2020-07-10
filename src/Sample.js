import React from 'react';
import {Dropdown, Nav} from 'react-bootstrap';
import './style.css';

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
                        <Dropdown.Item href="#/action-1" className="drop-item">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className="drop-item">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="drop-item">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <div >
                    <a className="lead font-weight-normal tab" style={{margin:"2rem", color:"white"}}>Grocery</a>
                    <a className="lead font-weight-normal" style={{margin:"2rem"}}>Restaurant</a>
                    <a className="lead font-weight-normal" style={{margin:"2rem"}}>Spa & Salon</a>
                    <a className="lead font-weight-normal" style={{margin:"2rem"}}>Retail</a>
                    <a className="lead font-weight-normal" style={{margin:"2rem"}}>Home Decor</a>
                    <a className="lead font-weight-normal" style={{margin:"2rem"}}>Automotive</a>
                    <a className="lead font-weight-normal" style={{margin:"2rem"}}>Electronics</a>
                </div>
            </center>
        </div>
    );
}