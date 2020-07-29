import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Cards() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <br />
        <br />

        <Card className="mx-3 my-5">
          <Card.Body className="mx-2">
            <Card.Title>
              <span>1 Video</span>
              <br />
              <br />
              <span className="">Price: ₹1000</span>
            </Card.Title>
            <br />
            <Card.Text style={{ color: "grey" }}>
              Less than one minute video
            </Card.Text>
            <br />
            <br />
            <span className="lead">Advance: ₹400</span>
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <div className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">1 Video</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">1 Brand</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">1 User</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">Online Chat Support</span>
          </div> */}

            <Button
              className="px-5"
              style={{
                background: "none",
                borderColor: "#AAB318",
                color: "#AAB318",
              }}
            >
              Start a Project
            </Button>
          </Card.Body>
        </Card>

        <Card className="mx-3 my-5">
          <Card.Body className="mx-2">
            <Card.Title>
              <span>3 Videos</span>
              <br />
              <br />
              <span className="">Price: ₹2700</span>
            </Card.Title>
            <br />
            <Card.Text style={{ color: "grey" }}>
              Less than one minute video
            </Card.Text>
            <br />
            <br />
            <span className="lead">Advance: ₹1200</span>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Button
              className="px-5"
              style={{
                background: "none",
                borderColor: "#AAB318",
                color: "#AAB318",
              }}
            >
              Start a Project
            </Button>
          </Card.Body>
        </Card>

        <Card className="mx-3 my-5">
          <Card.Body className="mx-2">
            <Card.Title>
              <span>6 Videos</span>
              <br />
              <br />
              <span className="">Price: ₹5000</span>
            </Card.Title>
            <br />
            <Card.Text style={{ color: "grey" }}>
              Less than one minute video
            </Card.Text>
            <br />
            <br />
            <span className="lead">Advance: ₹2000</span>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Button
              className="px-5"
              style={{
                background: "none",
                borderColor: "#AAB318",
                color: "#AAB318",
              }}
            >
              Start a Project
            </Button>
          </Card.Body>
        </Card>

        <Card className="mx-3 my-5">
          <Card.Body className="mx-2">
            <Card.Title>
              <span>10 Videos</span>
              <br />
              <br />
              <span className="">Price: ₹8000</span>
            </Card.Title>
            <br />
            <Card.Text style={{ color: "grey" }}>
              Less than one minute video
            </Card.Text>
            <br />
            <br />
            <span className="lead">Advance: ₹3000</span>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Button
              className="px-5"
              style={{
                background: "none",
                borderColor: "#AAB318",
                color: "#AAB318",
              }}
            >
              Start a Project
            </Button>
          </Card.Body>
        </Card>
      </div>

      <br />
      <center>
        <span className="lead">
          *If video exceeds 1 min, then 15 Rs per extra second will be charged.
        </span>
      </center>

      {/* <Card className="mx-3 my-5">
        <Card.Body className="mx-2">
          <Card.Title>
            ₹2999<span>/month</span>
            <br />
            <br />
            Base
          </Card.Title>
          <Card.Text style={{ color: "grey" }}>
            Perfect for the small business
          </Card.Text>
          <br />
          <div className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">3 Video</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">3 Brand</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">1 User</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">Online Chat Support</span>
          </div>
          <br />

          <Button
            className="px-5"
            style={{
              background: "none",
              borderColor: "#AAB318",
              color: "#AAB318",
            }}
          >
            Start a Project
          </Button>
        </Card.Body>
      </Card>

      <Card className="mx-3 my-5">
        <Card.Body className="mx-2">
          <Card.Title>
            Custom
            <br />
            <br />
            Festival
          </Card.Title>
          <Card.Text style={{ color: "grey" }}>
            Perfect for the large business
          </Card.Text>
          <br />
          <div className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">Unlimited Video</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">Multiple Brand</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">Unlimited User</span>
          </div>
          <br />
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <rect
                x="0.8"
                y="0.8"
                width="18.4"
                height="18.4"
                rx="9.2"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M5.38464 10.0001L7.89629 12.7908C8.04011 12.9506 8.28452 12.9681 8.44968 12.8305L14.6154 7.69238"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>

            <span className="mx-2">Dedicated Support</span>
          </div>
          <br />

          <Button
            className="px-5"
            style={{
              background: "none",
              borderColor: "#AAB318",
              color: "#AAB318",
            }}
          >
            Get a quote
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}
