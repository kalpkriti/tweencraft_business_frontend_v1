import React from "react";
import logo from "./static/logo.png";
import { Image } from "react-bootstrap";
import Illustration from "../static/illustration.png";

export default function Login() {
  return (
    <div className="row">
      <div className="col" style={{ textAlign: "justify" }}>
        <div className="container">
          <Image
            src={logo}
            style={{ margin: "5% 10%", textAlign: "justify" }}
          />
          <div className="heading">
            Cost effective animated videos for your business
          </div>
          <br />
          <div
            className="small-text"
            style={{ textTransform: "none", textAlign: "justify" }}
          >
            We work with businesses to improve their social media marketing with
            animated videos.
          </div>
        </div>
      </div>
      <div className="col">
        <div className="container"></div>
      </div>
    </div>
  );
}
