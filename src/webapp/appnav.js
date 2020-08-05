import React from "react";
import Logo from "./static/logo.png";
import { Navbar, Nav } from "react-bootstrap";

export default function AppNav() {
  return (
    <div>
      <Navbar bg="white" className="">
        <div className="col">
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
        </div>
        <div className="col d-flex justify-content-end">
          <span className="lead">Alexa Williams</span>
        </div>
      </Navbar>
    </div>
  );
}
