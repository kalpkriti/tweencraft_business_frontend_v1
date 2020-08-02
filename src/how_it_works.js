import React from "react";
import Ad from "./ad";
import "./style.css";
import Footer from "./footer";

export default function HowItWorks() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F8F8F8 -0.31%, #FFFFFF 52.09%)",
        mixBlendMode: "normal",
        height: "280px",
      }}
    >
      <div className="how-title">How it Works</div>

      <div className="how-head-pos how-head">
        How animated video through Kalpkriti works
      </div>

      <div className="how-img"></div>

      <center>
        <div className="how-ad-pos">
          <Ad />
        </div>
      </center>
      <div className="how-foot">
        <Footer />
      </div>
    </div>
  );
}
