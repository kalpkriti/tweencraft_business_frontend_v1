import React from "react";
import { Image } from "react-bootstrap";
import Img from "./static/illustration.png";
import { CustMod } from "./mods";
import Ad from "./ad";
import Footer from "./footer";
import "./css/aboutus.css";
export default function AboutUs() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F8F8F8 -0.31%, #FFFFFF 52.09%)",
        mixBlendMode: "normal",
        height: "280px",
      }}
    >
      <div className="container text-center">
        <br />
        <span className="about-title-pos">About us</span>

        <span className="about-head-pos about-head">
          Animated Videos most powerful way to share information
        </span>
        <br />

        <span className="about-body">
          We work with businesses to improve their social media marketing with
          animated videos. Using animated videos helps improve the reach and
          engagement for your social media ads. Our chatbot and dashboard
          features that will update and run entire process seamless animated
          videos for your business.
        </span>
        <br />
        <div className="about-img-pos">
          <Image src={Img} className="my-4" style={{ width: "100%" }} />
        </div>
      </div>
      <br />
      <center>
        <div className="about-cust">
          <CustMod />
        </div>
        <br />
        <br />
        <div className="about-ad-pos">
          <Ad />
        </div>
      </center>
      <div className="about-footer-pos">
        <Footer />
      </div>
    </div>
  );
}
