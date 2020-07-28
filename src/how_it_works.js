import React from "react";
import works from "./static/works.png";
import Ad from "./ad";
import "./style.css";

export default function HowItWorks() {
  return (
    <div>
      <div className="text-center small-text">
        <br />
        <br />
        How it Works
      </div>
      <br />
      <div className="heading text-center ">How animated video through</div>

      <div className="heading text-center">
        Kalpkriti works
        <br />
        <img src={works} className="my-4 py-4" id="carousel1" />
      </div>
      <center>
        <Ad />
      </center>
    </div>
  );
}
