import React from "react";
import { Image } from "react-bootstrap";
import Img from "./static/illustration.png";
import { CustMod } from "./mods";
import Ad from "./ad";

export default function AboutUs() {
  return (
    <div>
      <div className="container text-center">
        <br />
        <span className="small-text my-auto">About us</span>
        <br />
        <br />
        <span className="heading my-auto">
          Animated Videos most powerful way to share information
        </span>
        <br />
        <br />
        <span
          className="my-3"
          style={{
            fontFamily: "Monteserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "34px",

            textAlign: "center",
            letterSpacing: "0.4px",

            color: "#28272B",
            opacity: "0.8",
          }}
        >
          We work with businesses to improve their social media marketing with
          animated videos. Using animated videos helps improve the reach and
          engagement for your social media ads. Our chatbot and dashboard
          features that will update and run entire process seamless animated
          videos for your business.
        </span>
        <br />
        <Image src={Img} className="my-4" style={{ width: "100%" }} />
      </div>
      <br />
      <center>
        <div className="container">
          <CustMod />
        </div>
        <br />
        <br />
        <Ad />
      </center>
    </div>
  );
}
