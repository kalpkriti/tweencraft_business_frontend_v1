import React from "react";

export default function Ad() {
  return (
    <div className="container">
      <div className="row text-left">
        <div className="">
          <span className="small-orange-text ad-small-head-pos">
            Want to discuss with us.
          </span>
        </div>
        <div className="col-sm"></div>
      </div>
      <div className="row">
        <div className="">
          <span className="ad-head ad-head-pos">
            Tell us what you need, We'll tell you the best way for an animated
            video.
          </span>
        </div>

        <button
          className="btn btn-primary btn-lg ad-button-pos"
          style={{ backgroundColor: "#AAB318", border: "none" }}
        >
          Schedule a Call
        </button>

        <br />
        <div className="ad-small-button-text-pos">
          <span>
            Already a member?
            <a href="#" className="text-dark">
              {" "}
              Log In
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
