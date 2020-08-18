import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import StartProject from "./start_project";
import { useState } from "react";

export default function Cards() {
  const [formShow, setFormShow] = useState(false);
  const handleFormClose = () => {
    setFormShow(false);
  };
  const handleFormShow = () => {
    setFormShow(true);
  };
  return (
    <div>
      <Start_Project show={formShow} handle={handleFormClose} />
      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <br />
        <br />

        <Card className="mx-3 my-5">
          <Card.Body className="mx-2 text-center">
            <Card.Title>
              <span className="h2">Basic</span>
              <br />
              <span className="">₹999</span>
            </Card.Title>

            <Card.Text style={{ color: "grey" }}>
              <br />
              <div className="mb-4">
                <span className="h5">Free Script Revisions</span>
                <br />
                <span className="">2</span>
              </div>
              <div className="mb-4">
                <span className="h5">Free Video Revisions</span>
                <br />
                <span className="">2</span>
              </div>
              <div className="mb-4">
                <span className="h5">Characters</span>
                <br />
                <span className="">1</span>
              </div>
              <div className="mb-4">
                <span className="h5">Background </span>
                <br />
                <span className="">1</span>
              </div>
              <div className="mb-4">
                <span className="h5">Added Images</span>
                <br />
                <span className="">1</span>
              </div>
              <div className="mb-4">
                <span className="h5">Text</span>
                <br />
                <span className="">1 (Without Animation)</span>
              </div>
              <div className="mb-4">
                <span className="h5">3 Video Packages </span>
                <br />
                <span className="">NA</span>
                <br />
              </div>
              <div className="mb-4">
                <span className="h5">5 Video Packages </span>
                <br />
                <span className="">NA</span>
                <br />
              </div>
              <div className="mb-4">
                <span className="h5">10 Video Packages (9000)</span>
                <br />
                <span className="">₹4000 Advance</span>
              </div>
              <div className="mb-4">
                <span className="h5">Run your Ads on Kalpkriti </span>
                <br />
                <span className="">₹500</span>
                <br />
              </div>
            </Card.Text>
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
              onClick={handleFormShow}
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
          <Card.Body className="mx-2 text-center">
            <Card.Title>
              <span className="h2">Popular</span>
              <br />
              <span className="">₹1299</span>
            </Card.Title>

            <Card.Text style={{ color: "grey" }}>
              <br />
              <div className="mb-4">
                <span className="h5">Free Script Revisions</span>
                <br />
                <span className="">4</span>
              </div>
              <div className="mb-4">
                <span className="h5">Free Video Revisions</span>
                <br />
                <span className="">4</span>
              </div>
              <div className="mb-4">
                <span className="h5">Character</span>
                <br />
                <span className="">3</span>
              </div>
              <div className="mb-4">
                <span className="h5">Background </span>
                <br />
                <span className="">3</span>
              </div>
              <div className="mb-4">
                <span className="h5">Added Images</span>
                <br />
                <span className="">3</span>
              </div>
              <div className="mb-4">
                <span className="h5">Text</span>
                <br />
                <span className="">4 (With Animation)</span>
              </div>
              <div className="mb-4">
                <span className="h5">3 Video Packages (₹3600)</span>
                <br />
                <span className="">₹1500 Advance</span>
                <br />
              </div>
              <div className="mb-4">
                <span className="h5">5 Video Packages (₹5500)</span>
                <br />
                <span className="">₹2200 Advance</span>
                <br />
              </div>
              <div className="mb-4">
                <span className="h5">10 Video Packages (₹10000)</span>
                <br />
                <span className="">₹4000 Advance</span>
              </div>
              <div className="mb-4">
                <span className="h5">Run your Ads on Kalpkriti </span>
                <br />
                <span className="">₹500</span>
                <br />
              </div>
            </Card.Text>
            <br />

            <Button
              className="px-5"
              onClick={handleFormShow}
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
          <Card.Body className="mx-2 text-center">
            <Card.Title>
              <span className="h2">Premium</span>
              <br />
              <span className="">₹1999</span>
            </Card.Title>

            <Card.Text style={{ color: "grey" }}>
              <br />
              <div className="mb-4">
                <span className="h5">Free Script Revisions</span>
                <br />
                <span className="">7</span>
              </div>
              <div className="mb-4">
                <span className="h5">Free Video Revisions</span>
                <br />
                <span className="">7</span>
              </div>
              <div className="mb-4">
                <span className="h5">Characters</span>
                <br />
                <span className="">10</span>
              </div>
              <div className="mb-4">
                <span className="h5">Background </span>
                <br />
                <span className="">10</span>
              </div>
              <div className="mb-4">
                <span className="h5">Added Images</span>
                <br />
                <span className="">7</span>
              </div>
              <div className="mb-4">
                <span className="h5">Text</span>
                <br />
                <span className="">10 (With Animation)</span>
              </div>
              <div className="mb-4">
                <span className="h5">3 Video Packages (₹5100)</span>
                <br />
                <span className="">₹2000 Advance</span>
                <br />
              </div>
              <div className="mb-4">
                <span className="h5">5 Video Packages (₹7500)</span>
                <br />
                <span className="">₹3000 Advance</span>
                <br />
              </div>
              <div className="mb-4">
                <span className="h5">10 Video Packages (₹14000)</span>
                <br />
                <span className="">₹5500 Advance</span>
              </div>
              <div className="mb-4">
                <span className="h5">Run your Ads on Kalpkriti </span>
                <br />
                <span className="">Free</span>
                <br />
              </div>
            </Card.Text>
            <br />
            <Button
              className="px-5"
              onClick={handleFormShow}
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
        <div style={{ width: "50%" }}>
          <span className="lead">
            <strong>Terms & Conditions</strong>
            <br />
            <br />
            * Customer will have to provide all the images
            <br />
            * Once free revisions are consumed, each paid revisions will cost
            100 Rs for script, 200 Rs for video
            <br />* To make the video quick you will have to be responsive, if
            you do not provide feedback on script or video for a week, we will
            assume you are no longer interested and we will cancel the project
            without advanced refund.
          </span>
        </div>
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

function Start_Project(props) {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handle}
        size="l"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <StartProject handle={props.handle} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
