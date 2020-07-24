import React from "react";
import { Carousel, Nav, Dropdown, Image, Button, Modal } from "react-bootstrap";
import Img from "./static/image.png";
import "./style.css";
import { Feature1, CustMod, Feature2, Feature3 } from "./mods";
import { useState, useEffect } from "react";
import { Headings } from "./pricing";
import Cards from "./price_card";
import HowItWorks from "./how_it_works";
import { BootNavWhite } from "./index";
import axios from "axios";

var arr = [
  ["Insurance", "Insurance"],
  ["Jewellery", "Jewellery"],
  ["Miscellaneous", "Miscellaneous"],
  ["Covid_Safety", "Covid Safety"],
  ["Education", "Education"],
  ["Ayurveda", "Ayurveda"],
  ["Digital_Marketing", "Digital Marketing"],
];

function Home() {
  const [index, setIndex] = useState(0);
  const [vids, setVids] = useState([]);

  const handleVideoClick = (selectedKey) => {
    setIndex(selectedKey);
    console.log(selectedKey);
    const response = axios.post(
      "https://backend.tweencraft.com:5001/getSampleVideos",
      { category: arr[parseInt(selectedKey)][0] }
    );
    response.then((response) => {
      setVids(response.data.data.videos);
      console.log(arr[parseInt(selectedKey)][0]);
      console.log(selectedKey);
      console.log(response);
      console.log(vids);
    });
  };

  const listItems = arr.map((name) => (
    <Nav.Item>
      <Nav.Link className="small-tab-text cust1" eventKey={arr.indexOf(name)}>
        {name[1]}
      </Nav.Link>
    </Nav.Item>
  ));

  const listDrops = arr.map((name) => (
    <Dropdown.Item
      onClick={() => handleVideoClick(arr.indexOf(name))}
      className="drop-item"
    >
      {name[1]}
    </Dropdown.Item>
  ));

  return (
    <div>
      <div className="text-center py-2" id="bgimg">
        <BootNavWhite />

        <div className="container mx-auto py-5">
          <h2 className="heading" id="white">
            Cost effective animated videos for your business.
          </h2>
        </div>

        <br />
        <div className="container mx-auto">
          <h3 className="lead font-weight-normal" id="white">
            We work with businesses to improve{" "}
          </h3>
          <h3 className="lead font-weight-normal" id="white">
            their social media marketing with animated videos.
          </h3>
        </div>

        <br />

        <a
          className="btn btn-primary btn-lg"
          href="/startproject"
          style={{ backgroundColor: "#D1DB2A", border: "none" }}
        >
          Start a Project
        </a>

        <div className="container">
          <div id="tabs1">
            <br />
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Select Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item eventKey={arr.indexOf("Insurance")} className="drop-item">Insurance</Dropdown.Item>
                <Dropdown.Item eventKey={arr.indexOf("Jewellery")} className="drop-item">Jewellery</Dropdown.Item>
                <Dropdown.Item eventKey={arr.indexOf("Education")} className="drop-item">Education</Dropdown.Item>
                <Dropdown.Item eventKey={arr.indexOf("Covid Safety")} className="drop-item">Covid Safety</Dropdown.Item>
                <Dropdown.Item eventKey={arr.indexOf("Miscellaneous")} className="drop-item">Miscellaneous</Dropdown.Item>
                <Dropdown.Item eventKey={arr.indexOf("Digital Marketing")} className="drop-item">Digital Marketing</Dropdown.Item> */}

                {listDrops}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div id="tabs2">
            <Nav
              fill
              defaultActiveKey="Insurance"
              onSelect={(selectedKey) => handleVideoClick(selectedKey)}
            >
              {listItems}
              <Nav.Item>
                <Nav.Link href="/sample" className="small-tab-text">
                  View all
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <br />

        <center>
          <div>
            <ControlledCarousel index={index} vids={vids} />
          </div>
        </center>

        <br />
      </div>

      <div className="text-center small-text">Features</div>
      <br />
      <h2 className="heading">Use kalpkriti to drive growth</h2>
      <h2 className="heading">at your business</h2>

      <br />
      <div className="container">
        <Feature1 />
        <br />
        <br />
        <Feature2 />
        <br />
        <br />
        <Feature3 />
      </div>

      <div className="text-center my-4 py-4">
        <CustMod />
      </div>
      <br />

      <Headings />
      <br />
      <Cards />
      <br />
      <HowItWorks />
    </div>
  );
}

export default Home;

function ControlledCarousel(props) {
  const listCarouselItems = props.vids.map((vid) => (
    <Image
      src={vid.thumbnail}
      onClick={() => handleShow(vid.url)}
      style={{ height: "20%", width: "23%", margin: "5px 5px" }}
    />
  ));

  const [show, setShow] = useState(false);
  const [vidLink, setVidLink] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (link) => {
    setVidLink(link);
    setShow(true);
  };

  return (
    <div>
      <Carousel
        id="carousel1"
        controls={false}
        indicators={false}
        activeIndex={parseInt(props.index)}
      >
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
      </Carousel>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <video width="100%" height="100%" controls autoPlay>
            <source src={vidLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function Tabs() {
  return <div></div>;
}
