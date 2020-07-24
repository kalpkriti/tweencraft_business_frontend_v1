import React from "react";
import logo from "./static/logo.png";
import { Image, Form, Button } from "react-bootstrap";
import Illustration from "../static/illustration.png";

export default function Login() {
  return (
    <div className="container my-4">
      <div className="row align-items-center">
        <div className="col">
          <div className="container">
            <a href="/">
              <Image
                src={logo}
                style={{ margin: "5% 4%", textAlign: "justify" }}
              />
            </a>
            <br />
            <span className="heading">
              Cost effective animated videos for your business
            </span>

            <br />
            <span className="small-text" style={{ textTransform: "none" }}>
              We work with businesses to improve their social media marketing
              with animated videos.
            </span>
            <br />
            <br />
            <Image src={Illustration} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="col ">
          <div className="mx-5">
            <span className="heading my-1">Registered Customers</span>
            <br />
            <div className="my-3">
              <span>
                Please enter your mobile number to verify your account and login
              </span>
            </div>
            <Form>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                className="my-3"
              />
              <Form.Check
                type="checkbox"
                label="Remember Me"
                className="my-3"
              />
            </Form>
            <Button
              className="px-5 my-auto"
              onClick=""
              style={{
                background: "#D1DB2A",
                borderColor: "#D1DB2A",
                color: "white",
                width: "100%",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
